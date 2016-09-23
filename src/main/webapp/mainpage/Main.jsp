<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
/*reset*/
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var,
b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video { margin: 0; padding: 0; border: 0; outline: 0; font-size: 100%; vertical-align: baseline; background: transparent; }
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section { display: block; }
input,textarea,select,button,table{font-size:inherit;font-family:inherit; font-size: 100%; -webkit-text-size-adjust:none;}
ul,ol,li{list-style:none;}
a{text-decoration:none; color:inherit;}
a:hover, a:focus{text-decoration:underline;}
fieldset{margin:0; padding:0; border:none;} 
caption,legend{position:absolute;top:-5000px;text-indent:-5000px;visibility:hidden;width:0;height:0;font-size:0;line-height:0;}
img{vertical-align:middle;}
table{display: table;}
caption{display: table-caption;}
colgroup{display: table-column-group;}
col{display: table-column;}
thead{display: table-header-group;}
tbody{display: table-row-group;}
tfoot{display: table-footer-group;}
tr{display: table-row;}
td, th{display: table-cell;}
ul:after{content:" ";display:block;clear:both;}
body{ font-family:"arial", sans-serif; font-size:12px;}
/*reset*/
.main_section {margin: 0; padding: 0; background-color: #f1f1f1; padding:50px;}
.mainpage_wrap {
  width: 1280px;
  margin:0 auto;
  
}
.mainpage_Topcontainer {
  height: 290px;
  margin-top: 25px;
}
.mainpage_Botcontainer {
  margin-top: 25px;
}
.mainpage_wrap .mainpage_Topcontainer .banner {
  width: 583px;
  height: 232px;
  margin: 19px 9px 19px 29px;
  padding: 9px;
  float: left;
  background-color: black;
  border-radius: 10px;
}
.mainpage_wrap .mainpage_Topcontainer .pop_list {
  width: 599px;
  height: 250px;
  margin: 19px 29px 19px 9px;
  float: right;
  border: 1px solid black;
}
.mainpage_wrap .mainpage_Botcontainer .Botcontainer_list {
  margin: 0; padding: 0;
  overflow: hidden;
}
.Botcontainer_list li {
  width: 25%;
  float: left;
}
li .inner {
  margin: 6px 6px 8px 6px;
  background-color: white;
  overflow: hidden;
  border-radius: 10px;
}
.inner a:hover{
  text-decoration: none;
}
.inner .img {
  overflow:hidden;
}
.img img {
  width:100%;
  height: 200px;
}
.inner .in {
  font-size: 14px;
  border: 1px solid #e6e7e8;
  display: block;
  box-sizing: border-box;
  padding: 10px;
  border-top: none;
  text-align: center;
}
.category .category_list {
  width: 800px;
  margin: 0 auto;
}
.category_list .category_inner {
  width: 260px;
  float: left;
  background-color: white;
  margin: 0 3.1px;
  text-align: center;
  padding: 10px 0 10px 0;
  font-size: 20px;
}
.category {
  margin: 0 0 10px 0;
  height: 43px;
}
</style>
</head>
<body>
<jsp:include page="../header.html"></jsp:include>
<div class="main_section">
  <div class="mainpage_wrap">
    <div class="mainpage_Topcontainer">
      <video class="banner"
             src="/TeamProject/mainpage/mainpage_images/mamamoo-newyorkMV.mp4"
             controls></video>
      <div class="pop_list">pop_list</div>
    </div>
    <div class="mainpage_Botcontainer">
      <div class="category" >
        <div class="category_list">
              <a class="category_inner" id="category_honeyTip" href="#">TIP</a>
              <a class="category_inner" id="category_cloud" href="#">CLOUD</a>
              <a class="category_inner" id="category_history" href="#">HISTORY</a>
        </div>
      </div>  
      <ul class="Botcontainer_list">
        <li>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_1.jpg" alt="테스트 수지1테스트 수지1">
              </div>
              <span class="in">테스트 수지1<br>테스트 수지1
              </span>
            </a>
          </div>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_2.jpg" alt="테스트 수지2테스트 수지2">
              </div>
              <span class="in">테스트 수지2<br>테스트 수지2
              </span>
            </a>
          </div>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_3.jpg" alt="테스트 수지3테스트 수지3">
              </div>
              <span class="in">테스트 수지3<br>테스트 수지3
              </span>
            </a>
          </div>
        </li>
        <li>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_2.jpg" alt="테스트 수지2테스트 수지2">
              </div>
              <span class="in">테스트 수지2<br>테스트 수지2
              </span>
            </a>
          </div>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_1.jpg" alt="테스트 수지1테스트 수지1">
              </div>
              <span class="in">테스트 수지1<br>테스트 수지1
              </span>
            </a>
          </div>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_3.jpg" alt="테스트 수지3테스트 수지3">
              </div>
              <span class="in">테스트 수지3<br>테스트 수지3
              </span>
            </a>
          </div>
        </li>
        <li>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_3.jpg" alt="테스트 수지2테스트 수지2">
              </div>
              <span class="in">테스트 수지2<br>테스트 수지2
              </span>
            </a>
          </div>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_1.jpg" alt="테스트 수지1테스트 수지1">
              </div>
              <span class="in">테스트 수지1<br>테스트 수지1
              </span>
            </a>
          </div>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_2.jpg" alt="테스트 수지2테스트 수지2">
              </div>
              <span class="in">테스트 수지2<br>테스트 수지2
              </span>
            </a>
          </div>
        </li>
        <li>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_3.jpg" alt="테스트 수지3테스트 수지3">
              </div>
              <span class="in">테스트 수지3<br>테스트 수지3
              </span>
            </a>
          </div>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_2.jpg" alt="테스트 수지2테스트 수지2">
              </div>
              <span class="in">테스트 수지2<br>테스트 수지2
              </span>
            </a>
          </div>
          <div class="inner">
            <a href="#">
              <div class="img"><img src="/TeamProject/mainpage/mainpage_images/suji_1.jpg" alt="테스트 수지1테스트 수지1">
              </div>
              <span class="in">테스트 수지1<br>테스트 수지1
              </span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</body>
</html>