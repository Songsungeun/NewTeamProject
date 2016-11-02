var tempUserNo = 0;

$(document).ready(function(){
	$(function() {
		$("#includedContent").load("/TeamProject/header.html");
	});
});

//function category() { 
//console.log("카테고리2")
//$("#category_tab > li > #category-bar").click(function(){
//	$("#category_tab > li > a").removeClass("active");
//	$("#contents-tabs .tab-content").css({"display":"none"});
//	$(this).addClass("active");
//	$("#category_tab-"+($(this).attr("data-ctg"))).css({"display":"block"});
//});
//}

function ajaxBoardList() {
	$.getJSON(serverAddr + "/mainpage/postlist.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패했습니다.")
			return
		}
		var template1 = Handlebars.compile($('#liTemplateText').html())
		$(".tab-content > .category_tab-0").html(template1(result));
		$(".titleLink").click(function(event){
			$("#yourModal").modal();
			$("html").css({"overflow":"hidden"});
			 var no = $(this).attr("data-no")
			console.log(no)
			ajaxLoadBoard(no);
			ajaxPostComentsList(no)
			window.history.pushState("Changed URI", "", "/TeamProject/mainpage/ContentsDetail.html?no="+no);
		})
		$(".btn-primary").click(function() {
			$("#yourModal").css({"display":"none"});
			$("#super_HTML").css({"overflow":"auto"});
			window.history.pushState("Changed URI", "", "/TeamProject/mainpage/Main.html");
		})
		$(".categoryLink").click(function(event){
			event.stopImmediatePropagation();
			var ctgNo =$(this).attr("data-ctg")
			console.log("게시물 카테고리 누름: " + ctgNo)
			console.log("ctgNo 보냄")
			boardcategoryClick(ctgNo);
		})
		$(".userInfoLink").click(function(event) {
			window.location.href = "../membership/otherUserDetailPage.html?nick=" + $(this).attr("data-userNick");
		})
//		$("#yourModal").click(function() {
//		$("#yourModal").css({"display":"none"});
//		$("#super_HTML").css({"overflow":"auto"});
//		})
		category();
	})
}
function ajaxDetailBoardList() {
	$.getJSON(serverAddr + "/mainpage/postlist.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패했습니다.")
			return
		}
		var detailBoardTemplate2 = Handlebars.compile($('#detailliTemplateText').html())
		$(".tab-content > .category_tab-0").html(detailBoardTemplate2(result));
		$(".titleLink").click(function(event){
			$("#yourModal").modal();
			$("html").css({"overflow":"hidden"});
			var no = $(this).attr("data-no")
			
			console.log(no)
			ajaxLoadBoard(no)
			ajaxPostComentsList(no)
			window.history.pushState("Changed URI", "", "/TeamProject/mainpage/ContentsDetail.html?no="+no);
		})
		$(".btn-primary").click(function() {
			$("#yourModal").css({"display":"none"});
			$("#super_HTML").css({"overflow":"auto"});
			window.history.pushState("Changed URI", "", "/TeamProject/mainpage/Main.html");
		})
		$(".categoryLink").click(function(event){
			event.stopImmediatePropagation();
			var ctgNo =$(this).attr("data-ctg")
			console.log("게시물 카테고리 누름: " + ctgNo)
			console.log("ctgNo 보냄")
			detailboardcategoryClick(ctgNo);
		})
		$(".userInfoLink").click(function(event) {
			window.location.href = "../membership/otherUserDetailPage.html?nick=" + $(this).attr("data-userNick");
		})
		categorydetailBoard();
	})
	
}
var comentInfo = 0;


function ajaxLoadBoard(no) {
	$.getJSON(serverAddr + "/mainpage/postdetail.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		var fileList = '';
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		} else {
			$("#no").val(result.data.board.no);
			comentInfo =result.data.board.no;
			$("#userTitle").text(result.data.board.title);
			$("#url").text(result.data.board.url);
			$("#userImage").attr("src", "/TeamProject/upload/" + result.data.board.userProfilePath);
			$("#userDesc").html(result.data.board.contents);
			$("#createdDate").text(result.data.board.createdDate2);
			$("#writerNick").text(result.data.board.writerNick);
			$("#url_location").html(result.data.board.linkTitle);
			$("#post_user_id").text(result.data.board.email);
			$("#viewCount").text(result.data.board.viewCount);
			$("#like").text(result.data.board.like);
			$("#fileListArea").text(result.data.fileList.originalFileName);
			if (result.data.urlInfo.title != null) {
				$("#linkTitle").text(result.data.urlInfo.title);
				$("#linkDesc").text(result.data.urlInfo.description);
				$("#linkURL").text(result.data.urlInfo.urlAddr);
				$("#urlImage").html(result.data.urlInfo.image);
			}
			if (result.data.fileList.length > 0) {
				console.log("for문 시작");
				for (var i = 0; i < result.data.fileList.length; i++) {
					fileList += "<a id='fileListArea'" +"href='http://t2.java85.com:8080/TeamProject/upload/" 
					+ result.data.fileList[i].fileName + "' download='" + result.data.fileList[i].originalFileName + "'>"
					+ (i+1) + "." + result.data.fileList[i].originalFileName + "</div>"
				}
				$("#fileListArea").html(fileList);
			}
		}	
		$("#writerNick").click(function(event) {
			window.location.href = "../membership/otherUserDetailPage.html?nick=" + result.data.board.writerNick;
		})
		
		$(".owner_img").click(function(event) {
			window.location.href = "../membership/otherUserDetailPage.html?nick=" + result.data.board.writerNick;
		})
		// 이거 지우지마!!!! 회원번호 팔로우할때 쓸려고 넘기는 코드임!!!!
		// 또지우면 사생결단이다!!
		tempUserNo = result.data.board.userNo;
		console.log(result.data.board.contents);
//		$(".post_url > #url").click(function(event) {
//		console.log("url 눌림");
//		console.log(result.data.url);
//		location.href = result.data.url;
//		window.open(result.data.url);
//		})
		followLoderFunc(tempUserNo)
		
	})
	
	
}
function ajaxDetailLoadBoard(no) {
	$.getJSON(serverAddr + "/mainpage/postdetail.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		if (result.state == "fail" || result.state == "error") {
			alert("조회 실패입니다.")
			return
		} else if (result.state == "success"){
			$("#no2").val(result.data.board.no);
			comentInfo =result.data.board.no;
			$("#userTitle2").text(result.data.board.title);
			$("#url2").text(result.data.board.url);
			$("#userDesc2").html(result.data.board.contents);
			$("#createdDate2").text(result.data.board.createdDate2);
			$("#writerNick2").text(result.data.board.writerNick);
			$("#url_location2").html(result.data.board.linkTitle);
			$("#post_user_id2").text(result.data.board.email);
			$("#viewCount2").text(result.data.board.viewCount);
			$("#like2").text(result.data.board.like);
			$("#linkTitle2").text(result.data.urlInfo.title);
			$("#linkDesc2").text(result.data.urlInfo.description);
			$("#linkURL2").text(result.data.urlInfo.urlAddr);
			$("#urlImage2").html(result.data.urlInfo.image);
		} else {
			
			$("#no2").val(result.data.board.no);
			comentInfo =result.data.board.no;
			$("#userTitle2").text(result.data.board.title);
			$("#url2").text(result.data.board.url);
			$("#userDesc2").html(result.data.board.contents);
			$("#createdDate2").text(result.data.board.createdDate2);
			$("#writerNick2").text(result.data.board.writerNick);
			$("#url_location2").html(result.data.board.linkTitle);
			$("#post_user_id2").text(result.data.board.email);
			$("#viewCount2").text(result.data.board.viewCount);
			$("#like2").text(result.data.board.like);
		}
		tempUserNo = result.data.board.userNo;
		followLoderFunc(tempUserNo)
	})
}
$("#insertCmt").click(function(event){
	var honeyComent = {
			coment: $("#pcomment").val(),
			no: comentInfo
	}
	console.log(honeyComent);
	ajaxAddComent(honeyComent);
	console.log("addComentBtn 누름")
});
$("#insertCmt2").click(function(event){
	var honeyComent = {
			coment: $("#pcomment2").val(),
			no: comentInfo
	}
	console.log(honeyComent);
	ajaxAddComent(honeyComent);
	console.log("addComentBtn 누름")
});


function ajaxAddComent(honeyComent) {
	$.post(serverAddr + "/mainpage/insertComent.json", honeyComent, function(obj) {
		var result = obj.jsonResult
		console.log(result);
		if (result.state != "success") {
			alert("로그인 후 사용해 주세요.")
			return
		}
		location.reload(true);
	}, "json")
}

function ajaxPostComentsList(no) {
	$.getJSON(serverAddr + "/mainpage/comentList.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패했습니다.")
			return
		}
		var contents = ""
			var arr = result.data.comentList
			for (var i=0; i < arr.length; i++) {
				if(result.data.LoginInfo == arr[i].memberNo) {
					contents += "<div class='coment_wrap' id='depth" + arr[i].comentDepth + "' data-cmtNo='" + arr[i].cmtNo +"'>" +
					"<div class='coment_info'>" +
					"<a class='cmt_userNick' href='#' data-no='" + arr[i].memberNo + "'>" + arr[i].writerNick + "</a>" +
					"<span class='cmt_conts' data-cmtarea='" + arr[i].cmtNo + "'>" + arr[i].coment + "</span>" + "</div>" +
					"<div class='coment_ud'>" +
					"<span class='cmt_createdDate'>" + arr[i].createdDate2 + "</span>" +
					"<a class='cmt_reply' href='#' data-no='" + arr[i].cmtNo + "'>답글달기</a>" +
					"<div class='replyArea'></div>" +
					"<div class='cmt-btn-wrap'>" +
					"<a class='cmt_update' type='button' data-update='" + arr[i].cmtNo + "'>수정</a>" +
					"<a class='cmt_delete' type='button' data-Delete='" + arr[i].cmtNo + 
					"' data-depth='" + arr[i].comentDepth + "'>삭제</a>" +
					"</div>" + "</div>" + "</div>"
				} 
				if(result.data.LoginInfo != arr[i].memberNo || result.data.LoginInfo == 0){
					contents += "<div class='coment_wrap' id='depth" + arr[i].comentDepth + "' data-cmtNo='" + arr[i].cmtNo +"'>" +
					"<div class='coment_info'>" +
					"<a class='cmt_userNick' href='#' data-no='" + arr[i].memberNo + "'>" + arr[i].writerNick + "</a>" +
					"<span class='cmt_conts' data-cmtarea='" + arr[i].cmtNo + "'>" + arr[i].coment + "</span>" + "</div>" +
					"<div class='coment_ud'>" +
					"<span class='cmt_createdDate'>" + arr[i].createdDate2 + "</span>" +
					"<a class='cmt_reply' href='#' data-no='" + arr[i].cmtNo + "'>답글달기</a>" +
					"<div class='replyArea'></div>" +
					"<div class='cmt-btn-wrap'>" +
					"<a class='cmt_update' type='button' style='display:none' data-update='" + arr[i].cmtNo + "'>수정</a>" +
					"<a class='cmt_delete' type='button' style='display:none' data-Delete='" + arr[i].cmtNo +
					"' data-depth='" + arr[i].comentDepth + "'>삭제</a>" +
					"</div>" + "</div>" + "</div>"
				}
			}
		$(".userComment > .cmts_list").html(contents);
		console.log(result.data.LoginInfo)
	})
}
function ajaxDetailPostComentsList(no) {
	$.getJSON(serverAddr + "/mainpage/comentList.json?no=" + no, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("서버에서 데이터를 가져오는데 실패했습니다.")
			return
		}
		var contents = ""
			var arr = result.data.comentList
			for (var i=0; i < arr.length; i++) {
				if(result.data.LoginInfo == arr[i].memberNo) {
					contents += "<div class='coment_wrap' id='depth" + arr[i].comentDepth + "' data-cmtNo='" + arr[i].cmtNo +"'>" +
					"<div class='coment_info'>" +
					"<a class='cmt_userNick' href='#' data-no='" + arr[i].memberNo + "'>" + arr[i].writerNick + "</a>" +
					"<span class='cmt_conts' data-cmtarea='" + arr[i].cmtNo + "'>" + arr[i].coment + "</span>" + "</div>" +
					"<div class='coment_ud'>" +
					"<span class='cmt_createdDate'>" + arr[i].createdDate2 + "</span>" +
					"<a class='cmt_reply' href='#' data-no='" + arr[i].cmtNo + "'>답글달기</a>" +
					"<div class='replyArea'></div>" +
					"<div class='cmt-btn-wrap'>" +
					"<a class='cmt_update' type='button' data-update='" + arr[i].cmtNo + "'>수정</a>" +
					"<a class='cmt_delete' type='button' data-Delete='" + arr[i].cmtNo + 
					"' data-depth='" + arr[i].comentDepth + "'>삭제</a>" +
					"</div>" + "</div>" + "</div>"
				} 
				if(result.data.LoginInfo != arr[i].memberNo || result.data.LoginInfo == 0){
					contents += "<div class='coment_wrap' id='depth" + arr[i].comentDepth + "' data-cmtNo='" + arr[i].cmtNo +"'>" +
					"<div class='coment_info'>" +
					"<a class='cmt_userNick' href='#' data-no='" + arr[i].memberNo + "'>" + arr[i].writerNick + "</a>" +
					"<span class='cmt_conts' data-cmtarea='" + arr[i].cmtNo + "'>" + arr[i].coment + "</span>" + "</div>" +
					"<div class='coment_ud'>" +
					"<span class='cmt_createdDate'>" + arr[i].createdDate2 + "</span>" +
					"<a class='cmt_reply' href='#' data-no='" + arr[i].cmtNo + "'>답글달기</a>" +
					"<div class='replyArea'></div>" +
					"<div class='cmt-btn-wrap'>" +
					"<a class='cmt_update' type='button' style='display:none' data-update='" + arr[i].cmtNo + "'>수정</a>" +
					"<a class='cmt_delete' type='button' style='display:none' data-Delete='" + arr[i].cmtNo +
					"' data-depth='" + arr[i].comentDepth + "'>삭제</a>" +
					"</div>" + "</div>" + "</div>"
				}
			}
		$(".userComment > .cmts_list2").html(contents);
		console.log(result.data.LoginInfo)
	})
}
var childcomentThread;
$(document.body).on("click",".cmt_reply",function(event) {
	console.log("cmt_reply버튼 클릭");
	childcomentThread = $(this).attr("data-no");
	console.log(childcomentThread);
	$(".coment_wrap[data-cmtNo=" + childcomentThread + "]").find(".replyArea").html(
			"<form class='userComment' method='post' action='#'>" +
			"<textarea placeholder='Add a comment...' maxlength='255'" +
			"id='ccomment'></textarea>" +
			"<button type='button' class='reply-save-btn' >저장</button>" +
			"<button type='button' class='bit-cancel-btn' >취소</button>"
	);
})
$(document.body).on("click", ".reply-save-btn", function(event){
	var honeyComent = {
			cmtNo: childcomentThread,
			coment: $("#ccomment").val(),
			no: comentInfo
	}
	console.log("addChildComentBtn 누름")
	console.log(honeyComent);
	ajaxComentReply(honeyComent);
})
function ajaxComentReply(honeyComent) {
	console.log("ajaxComentReply")
	console.log(honeyComent);
	$.post(serverAddr + "/mainpage/insertChildComent.json", honeyComent, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("로그인 후 사용해 주세요.")
			return
		} 
		location.reload(true);
	}, "json")  
}


function ajaxComentDetail(no) {
	$.getJSON(serverAddr + "/mainpage/comentDetail.json?no=" + no, function(obj) {
		var result = obj.jsonResult      
		if (result.state != "success") {
			alert("조회 실패입니다.")
			return
		} 
		else {
			$(".coment_wrap[data-cmtNo=" + no + "]").find(".cmt_conts").html(
			"<textarea type='text' class='update-contents reUpdateLimit'></textarea>");
			$(".coment_wrap[data-cmtNo=" + no + "]").find(".cmt-btn-wrap").html(
					"<button type='button' class='bit-save-btn' data-no=" + no + ">저장</button>" +
					"<button type='button' class='bit-cancel-btn' data-no=" + no + ">취소</button>");

			$(".coment_wrap[data-cmtNo=" + no + "]").find(".update-contents").val(result.data.coment);

			console.log("comentDepth" + result.data.comentDepth)
		}
	})   
}
$(document.body).on("click",".cmt_update",function(event) {
	var cno = $(this).attr("data-update")
	ajaxComentDetail(cno)
});

$(document.body).on("click",".bit-save-btn",function(event) {
	var honeyComent = {
			cmtNo: $(this).attr("data-no"),
			coment: $(".update-contents").val()
	}
	if (confirm("정말 변경하시겠습니까?") == true) {
		console.log(honeyComent.cmtNo)
		ajaxUpdateComent(honeyComent)
	} else {
		return;
	}
});

function ajaxUpdateComent(honeyComent) {
	$.post(serverAddr + "/mainpage/updateComment.json", honeyComent, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("변경 실패입니다.")
			return
		}
		location.reload();
	}, "json")
}
$(document.body).on("click",".cmt_delete",function(event) {
	var depth = $(this).attr("data-depth")
	console.log("depth")
	console.log(depth)
	var no = $(this).attr("data-Delete");
	if(depth == 0) {
		if (confirm("정말 삭제하시겠습니까?") == true) {
			ajaxDeleteComent(no)
		} else {
			return;
		}
	} 
	if(depth == 1){
		if (confirm("정말 삭제하시겠습니까?") == true) {
			ajaxDeleteChildComent(no)
		} else {
			return;
		}
	}
});

function ajaxDeleteComent(no) {
	$.getJSON(serverAddr + "/mainpage/delete.json", {
		no: no,
	}, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("삭제 실패입니다.")
			return
		}
		location.reload(true);
	})
}

function ajaxDeleteChildComent(no) {
	$.getJSON(serverAddr + "/mainpage/childdelete.json", {
		no: no,
	}, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
			alert("삭제 실패입니다.")
			return
		}
		location.reload(true);
	})
}


window.onclick = function(event) {
	var htmlTag = document.getElementById('super_HTML');
	var modal = document.getElementById('yourModal');
	if (event.target == modal) {
		modal.style.display = "none";
		htmlTag.style.overflow = "auto";
		window.history.pushState("Changed URI", "", "/TeamProject/mainpage/Main.html");
	}


}
