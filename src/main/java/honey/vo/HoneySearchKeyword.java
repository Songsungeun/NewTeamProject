package honey.vo;

import java.sql.Date;
import java.text.SimpleDateFormat;

public class HoneySearchKeyword {
  
  static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
  
	
  protected String searchValue;
    protected String title;
    protected String url;
    protected String contents;
    protected String userName;
    protected String email;
    protected String nickname;
    protected String filename;

    protected int fmno;
    protected int fileNo;
    protected int boardNo;
    protected String oriFileName;
    protected long fileSize;
    protected String fmcreatedDate;
    

    protected int no;
    protected String writerNick;
    protected Date createdDate;   
    protected String createdDate2;   
    protected int like;
    protected int viewCount;
    protected String userNo;
    protected int categoryNo;
    protected String category;
    protected String linkTitle;
    protected String linkURL;
    protected String linkDetailUrl;
    protected String linkImage;
    protected String linkDesc;
    protected String userProfilePath;
    protected int fileStatus;
    
    
    
    
    
	public String getSearchValue() {
		return searchValue;
	}
	public void setSearchValue(String searchValue) {
		this.searchValue = searchValue;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
  public String getFilename() {
    return filename;
  }
  public void setFilename(String filename) {
    this.filename = filename;
  }
 
  //=========================
  //  카드 UI용 Get/Seter
  //=========================
  
  public String getWriterNick() {
    return writerNick;
  }
  public void setWriterNick(String writerNick) {
    this.writerNick = writerNick;
  }
  public int getLike() {
    return like;
  }
  public void setLike(int like) {
    this.like = like;
  }
  public int getViewCount() {
    return viewCount;
  }
  public void setViewCount(int viewCount) {
    this.viewCount = viewCount;
  }
  public String getUserNo() {
    return userNo;
  }
  public void setUserNo(String userNo) {
    this.userNo = userNo;
  }
  public int getCategoryNo() {
    return categoryNo;
  }
  public void setCategoryNo(int categoryNo) {
    this.categoryNo = categoryNo;
  }
  public String getCategory() {
    return category;
  }
  public void setCategory(String category) {
    this.category = category;
  }
  public String getLinkTitle() {
    return linkTitle;
  }
  public void setLinkTitle(String linkTitle) {
    this.linkTitle = linkTitle;
  }
  public String getLinkURL() {
    return linkURL;
  }
  public void setLinkURL(String linkURL) {
    this.linkURL = linkURL;
  }
  public String getLinkDetailUrl() {
    return linkDetailUrl;
  }
  public void setLinkDetailUrl(String linkDetailUrl) {
    this.linkDetailUrl = linkDetailUrl;
  }
  public String getLinkImage() {
    return linkImage;
  }
  public void setLinkImage(String linkImage) {
    this.linkImage = linkImage;
  }
  public String getLinkDesc() {
    return linkDesc;
  }
  public void setLinkDesc(String linkDesc) {
    this.linkDesc = linkDesc;
  }
  public String getUserProfilePath() {
    return userProfilePath;
  }
  public void setUserProfilePath(String userProfilePath) {
    this.userProfilePath = userProfilePath;
  }
  public int getFileStatus() {
    return fileStatus;
  }
  public void setFileStatus(int fileStatus) {
    this.fileStatus = fileStatus;
  }
  
  public Date getCreatedDate() {
    return createdDate;
  }
  public void setCreatedDate(Date createdDate) {
    this.createdDate = createdDate;
    this.createdDate2 = format.format(createdDate);
  }
  public String getCreatedDate2() {
    return createdDate2;
  }
  public void setCreatedDate2(String str) {
    this.createdDate = Date.valueOf(str);
    this.createdDate2 = str;
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  
//=========================
  //  파일 검색용 Get/Seter
  //=========================
  public int getFileNo() {
    return fileNo;
  }
  public void setFileNo(int fileNo) {
    this.fileNo = fileNo;
  }
  public int getBoardNo() {
    return boardNo;
  }
  public void setBoardNo(int boardNo) {
    this.boardNo = boardNo;
  }
  public String getOriFileName() {
    return oriFileName;
  }
  public void setOriFileName(String oriFileName) {
    this.oriFileName = oriFileName;
  }
  public long getFileSize() {
    return fileSize;
  }
  public void setFileSize(long fileSize) {
    this.fileSize = fileSize;
  }
  
  public int getFmno() {
    return fmno;
  }
  public void setFmno(int fmno) {
    this.fmno = fmno;
  }
  public String getFmcreatedDate() {
    return fmcreatedDate;
  }
  public void setFmcreatedDate(String fmcreatedDate) {
    this.fmcreatedDate = fmcreatedDate;
  }
  
}




