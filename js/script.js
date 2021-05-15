


//  changing image in mmobile and desktop mode !!!
imgChangeFunc = function(){
	$(function(){
		if($(window).width()<576){
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
		else if ($(window).width()>=576){
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
		// console.log($("div"))
	}

	if($(window).width()>=992){
		// console.log($(window).width());

		// below method is used, because we wanted to detect multiple elements with same 
		// id. if i was passing directly "#menu-container-id", it was selecting only the first element with this id
		$("div[id='menu-container-id']").addClass("content-container");
		$("div[id='menu-content-id']").addClass("center");
		// console.log($("div[id='menu-container-id']"))
		// console.log($("div[id='menu-content-id']"))
	}
}

$(window).resize(contentChangeFunc);
$(document).ready(contentChangeFunc);


// MENU page addition for mobile compatibility 

imgChangeFunc = function(){
	$(function(){
		if($(window).width()<576){
			// console.log($(window).width());
			$("#menu-img1").each(function(){
				$(this).attr("src", $(this).attr("src").replace("../images/2900 x 2003/appetizer_1.jpg","../images/2300x3200/appetizer_2.jpg"));
			});

			$("#menu-img2").each(function(){
				$(this).attr("src", $(this).attr("src").replace("../images/2900 x 2003/soup_1.jpg","../images/2300x3200/soup_2.jpg"));
			});

			$("#menu-img3").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2900 x 2003/salad_2.jpg","images/2300x3200/salad_1.jpg"));
			});

			$("#menu-img4").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2900 x 2003/pizza_3.jpg","images/2300x3200/pizza_1.jpg"));
			});

			$("#menu-img5").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2900 x 2003/burger_2.jpg","images/2300x3200/sandwitch_1.jpg"));
			});

			$("#menu-img6").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2900 x 2003/coffee_1.jpg","images/2300x3200/drink_1.jpg"));
			});

			$("#menu-img7").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2900 x 2003/dessert_5.jpg","images/2300x3200/dessert_3.jpg"));
			});
		}
		else if ($(window).width()>=576){
			$("#menu-img1").each(function(){
				$(this).attr("src", $(this).attr("src").replace("../images/2300x3200/appetizer_2.jpg","../images/2900 x 2003/appetizer_1.jpg"));
			});

			$("#menu-img2").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2300x3200/soup_2.jpg","images/2900 x 2003/soup_1.jpg"));
			});

			$("#menu-img3").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2300x3200/salad_1.jpg","images/2900 x 2003/salad_2.jpg"));
			});

			$("#menu-img4").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2300x3200/pizza_1.jpg","images/2900 x 2003/pizza_3.jpg"));
			});

			$("#menu-img5").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2300x3200/sandwitch_1.jpg","images/2900 x 2003/burger_2.jpg"));
			});

			$("#menu-img6").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2300x3200/drink_1.jpg","images/2900 x 2003/coffee_1.jpg"));
			});

			$("#menu-img7").each(function(){
				$(this).attr("src", $(this).attr("src").replace("images/2300x3200/dessert_3.jpg","images/2900 x 2003/dessert_5.jpg"));
			});
		}
	});
}

$(window).resize(imgChangeFunc);
$(document).ready(imgChangeFunc);



// HANDELING GREY COLOR IN SPL TAB

chng_grey = function(){
	if( $(window).width()>=768){
		$("#salad-spl-id").addClass(" grey");
		$("#soup-spl-id").removeClass("grey");
		$("#dessert-spl-id").removeClass("grey");
		$("#salad-spl-pic").each(function(){
			$(this).attr("class", $(this).attr("class").replace("grey-border","white-border"));
		});
		$("#soup-spl-pic").each(function(){
			$(this).attr("class", $(this).attr("class").replace("white-border","grey-border"));
		});
		$("#dessert-spl-pic").each(function(){
			$(this).attr("class", $(this).attr("class").replace("white-border","grey-border"));
		});
	}
	else
	{
		$("#dessert-spl-id").addClass(" grey");
		$("#soup-spl-id").addClass(" grey");
		$("#salad-spl-id").removeClass("grey");
		$("#salad-spl-pic").each(function(){
			$(this).attr("class", $(this).attr("class").replace("white-border","grey-border"));
		});
		$("#soup-spl-pic").each(function(){
			$(this).attr("class", $(this).attr("class").replace("grey-border","white-border"));
		});
		$("#dessert-spl-pic").each(function(){
			$(this).attr("class", $(this).attr("class").replace("grey-border","white-border"));
		});
	}
} 

$(window).resize(chng_grey);
$(document).ready(chng_grey);


// // contact page stuff !!!!
// chnage_map_size = function(){
// 	if($(window).width() >= 992){
// 		$("#map").each(function(){
// 			$(this).attr("width","500");
// 		});
// 		console.log("500w")
// 	}

// 	else if( $(window).width()<992 && $(window).width()>=768){
// 		$("#map").each(function(){
// 			$(this).attr("width","600");
// 		});
// 		console.log("600w")
// 	}
// 	else if($(window).width()<768){
// 		$("#map").each(function(){
// 			$(this).attr("width","500");
// 		});
// 		console.log("500w")
// 	}
// 	else if($(window).width()<620){
// 		$("#map").each(function(){
// 			$(this).attr("width","300");
// 		});
// 		console.log("300w")
// 	}
// }

// $(window).resize(chnage_map_size);
// $(document).ready(chnage_map_size);