


//  changing image in mmobile and desktop mode !!!
imgChangeFunc = function(){
	$(function(){
		if($(window).width()<568){
			// console.log($(window).width());
			$("#img1").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2900 x 2003/pasta_1.jpg","images/2300x3200/fries_1.jpg"));
			});

			$("#img2").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2900 x 2003/chinese_1.jpg","images/2300x3200/drink_2.jpg"));
			});

			$("#img3").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2900 x 2003/dessert_4.jpg","images/2300x3200/dessert_1.jpg"));
			});
		}
		else if ($(window).width()>=568){
			$("#img1").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2300x3200/fries_1.jpg","images/2900 x 2003/pasta_1.jpg"));
			});

			$("#img2").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2300x3200/drink_2.jpg","images/2900 x 2003/chinese_1.jpg"));
			});

			$("#img3").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2300x3200/dessert_1.jpg","images/2900 x 2003/dessert_4.jpg"));
			});
		}
	});
}

$(window).resize(imgChangeFunc);
$(document).ready(imgChangeFunc);


//  stuff for content of about sectin !!!!!

contentChangeFunc = function(){
	if($(window).width()<992){
		// console.log($(window).width());
		$("div").removeClass("content-container");
		$("div").removeClass("center");
	}

	if($(window).width()>=992){
		// console.log($(window).width());
		$("#about-container-id").addClass("content-container");
		$("#about-content-id").addClass("center");
	}
}

$(window).resize(contentChangeFunc);
$(document).ready(contentChangeFunc);


//  stuff for content of MENU SECTION!!!!!

contentChangeFunc = function(){
	if($(window).width()<992){
		// console.log($(window).width());
		$("div").removeClass("content-container");
		$("div").removeClass("center");
	}

	if($(window).width()>=992){
		// console.log($(window).width());
		$("#menu-container-id").addClass("content-container");
		$("#menu-content-id").addClass("center");
	}
}

$(window).resize(contentChangeFunc);
$(document).ready(contentChangeFunc);