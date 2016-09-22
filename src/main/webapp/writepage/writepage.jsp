<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>���� ���丮</title>
<style>
  div {
    border: 1px solid #cccccc;
    text-align: center;
    font-family:: "����"
  }
  
  body {
    background-color: #f1f1f2;
  }
  #write_header {
    border: 1px solid #cccccc;
    width: 100%;
    height: 50px;
    padding: 0;
    margin: 0;
    text-align: center;
    background-color: white;
  }
  #body_wrap {
    border: 1px solid black;
    max-width: 1280px;
    margin: 30px auto;
    padding: 0;
    background-color: white;
    height: 600px;
    vertical-align: center;
  }
  
  #body_wrap .write_wrap .write_top ul {
    list-style-type: none;
  }
  
  #body_wrap .write_wrap .write_top ul li {
    float: left;
    margin-left: 15px;
  }
  
  #body_wrap .write_wrap .write_top ul li #category{
    margin-left: 70px;
  }
  
  #body_wrap .write_wrap .write_top ul li input {
    font-size: 15px;
  }
  
  .write_top #category {
    font-size: 15px;
  }
  
  .write_wrap .write_area {
    margin-top: 10px;
  }
</style>
</head>
<body>
<header id="write_header">
  ��� ����
</header>

<div id="body_wrap">
  <form class="write_wrap">
    <fieldset class="write_top">
      <ul>
        <li>
          <select id="category">
            <option value="life">������</option>
            <option value="sports">������</option>
            <option value="car">��</option>
            <option value="game">����</option>
            <option value="entertaiment">TV/����</option>
            <option value="music">����</option>
            <option value="movie">��ȭ</option>
            <option value="int">����/����</option>
            <option value="couple">����</option>
            <option value="etc">��Ÿ</option>
          </select>
        <li><label>����</label><input type="text" size="80" id="title">
      </ul>
    </fieldset>
    
    <div class="write_area">
      <script type="text/javascript" src="../lib/se2/js/HuskyEZCreator.js" charset="utf-8"></script>  
      <textarea name="content" id="content" rows="10" cols="300" style='width:100%;'>�۳���</textarea>
      <script type="text/javascript">
        var oEditors = [];
        nhn.husky.EZCreator.createInIFrame({
        oAppRef: oEditors,
        elPlaceHolder: "content",
        sSkinURI: "../lib/se2/SmartEditor2Skin.html",
        fCreator: "createSEditor2"
        });
      </script> 

    </div>
  </form>
</div>
</body>
</html>