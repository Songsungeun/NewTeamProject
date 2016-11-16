package honey.controller.json;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import honey.vo.UrlInfo;


public class Scrapper {

	public static UrlInfo parsePageHeaderInfo(String urlStr) throws Exception {
		System.out.println("HTML parsing Start");
		
		
		Document doc = Jsoup.connect(urlStr).timeout(30000).get();
		UrlInfo urlInfo = new UrlInfo();

		String title = null;
		Elements metaOgTitle = doc.select("meta[property=og:title]");
		if (metaOgTitle != null) {
			title = metaOgTitle.attr("content");
		}

		String image = null;
		Elements metaOgImage = doc.select("meta[property=og:image]");
		if (metaOgImage != null) {
			image = metaOgImage.attr("content");
		}

		String description = null;
		Elements metaOgDesc = doc.select("meta[property=og:description]");
		if (metaOgDesc != null) {
			description = metaOgDesc.attr("content");
		}

		String urlAddr = null;
		Elements metaOgUrlAddr = doc.select("meta[property=og:url]");
		
		if (metaOgUrlAddr != null) {
			String transString = metaOgUrlAddr.attr("content");

			urlInfo.setDetailUrl(transString);

			String temp[]  = transString.split("/");
			urlAddr = temp[2];

			urlAddr = urlAddr.toUpperCase();
		} else {
			System.out.println("og:url 이 읍어");
		}


		urlInfo.setTitle("<h2>" + title + "</h2>");
		urlInfo.setImage("<image src='" + image + "' align='left' hspace='12' vspace='12' style= 'height:249px; width:476px;''>");
		urlInfo.setDescription(description);
		urlInfo.setUrlAddr(urlAddr);
		return urlInfo;

	}

	public static UrlInfo UrlForDB(String urlStr) throws Exception {
		Connection con = Jsoup.connect(urlStr);
		Document doc = con.timeout(120000).get();
		UrlInfo urlInfo = new UrlInfo();

		// 제목 파싱 시작!!
		String title = null;
		//meta Data에 property로 네이밍한 경우
		if (!doc.select("meta[property=og:title]").isEmpty()) {
			//	metaOgTitle = doc.select("meta[property=og:title]");
			title = doc.select("meta[property=og:title]").attr("content");

			// meta Data에 name으로 네이밍한 경우
		} else if (!doc.select("meta[name=og:title]").isEmpty()) {
			title = doc.select("meta[name=og:title]").attr("content");

			// meta Data에 정보 등록 하지 않은 경우
		} else if (!doc.title().isEmpty()) {
			title = doc.title();
		}

		String image = null;
		Elements metaOgImage = doc.select("meta[property=og:image]");
		if (!doc.select("meta[property=og:image]").isEmpty()) {
			image = metaOgImage.attr("content");

		} else if (!doc.select("meta[name=og:image]").isEmpty()) {
			image = doc.select("meta[name=og:image]").attr("content");
		} 

		String description = null;
		//meta Data에 property로 네이밍한 경우
		if (!doc.select("meta[property=og:description]").isEmpty()) {
			description = doc.select("meta[property=og:description]").attr("content");

		} else if (!doc.select("meta[name=og:description]").isEmpty()) {
			description = doc.select("meta[name=og:description]").attr("content");
		}
		
		// description 너무 많이 넣어놓은 나쁜 사이트들 때문에...
		if (description.length() > 1000) {
			String cutString = description.substring(0, 1000);
			description = cutString;
		}
		// url Parsing 시작!!
		String urlAddr = null;
		Elements metaOgUrlAddr = doc.select("meta[property=og:url]");

		if (!doc.select("meta[property=og:url]").isEmpty()) {
			String transString = doc.select("meta[property=og:url]").attr("content");
			String temp[]  = transString.split("/");

			urlAddr = temp[2];

			urlAddr = urlAddr.toUpperCase();

		} else if (!doc.select("meta[name=og:url]").isEmpty()){
			String transString = doc.select("meta[name=og:url]").attr("content");
			String temp[]  = transString.split("/");


			urlAddr = temp[2];

			urlAddr = urlAddr.toUpperCase();
			System.out.println("어퍼서브: " + urlAddr);
		} else {
			System.out.println("og:url 이 읍어");
		}

		urlInfo.setTitle(title);
		urlInfo.setImage(image);
		urlInfo.setDescription(description);
		urlInfo.setUrlAddr(urlAddr);
		urlInfo.setDetailUrl(urlStr);

		return urlInfo;


	}
}

//Old 코드

/*StringBuilder sb = new StringBuilder();
Connection con = Jsoup.connect(urlStr);

 this browseragant thing is important to trick servers into sending us the LARGEST versions of the images 
Document doc = con.get();

String text = null;
Elements metaOgTitle = doc.select("meta[property=og:title]");
if (metaOgTitle!=null) {
    text = metaOgTitle.attr("content");
}
else {
    text = doc.title();
}

String imageUrl = null;
Elements metaOgImage = doc.select("meta[property=og:image]");
if (metaOgImage!=null) {
    imageUrl = metaOgImage.attr("content");
}

if (imageUrl!=null) {
    sb.append("<img src='");
    sb.append(imageUrl);
    sb.append("' align='left' hspace='12' vspace='12' height='276px width='159px'>");
}

if (text!=null) {
    sb.append(text);
}

return sb.toString();*/       

