//  button for sliding images , but not automatic !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active-dot", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active-dot";

// }


// automatic slide show !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}



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


//  stuff for content of abut sectin !!!!!

contentChangeFunc = function(){
	if($(window).width()<992){
		// console.log($(window).width());
		$("div").removeClass("content-container");
		$("div").removeClass("center");
	}
}

$(window).resize(contentChangeFunc);
$(document).ready(contentChangeFunc);