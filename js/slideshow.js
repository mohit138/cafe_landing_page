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

// (function (global) {

// var ss = {};


// automatic slide show !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var slideIndex = 0;
var temp = 2; // for the first time, arranged to load quickly
var slidetime = 3000;
showSlides = function () {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var slides = $(".mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // console.log(slides[i].style.display)
  }
  // console.log(slides.style)
  console.log(slides.length)
  // console.log(slides.style.display)
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}
  if(slides.length != 0)
  {
    slides[slideIndex-1].style.display = "block";
    // console.log("block chnage");
    temp = slidetime;

  }
  
  setTimeout(showSlides, temp); // Change image every 2 seconds
}






var slides = document.getElementsByClassName("mySlides");
// console.log(slides.style);
showSlides();
// console.log(slides);
// console.log("fffffff");

// document.addEventListener("DOMContentLoaded", function (event) {
//   var slides = document.getElementsByClassName("mySlides");
// 	console.log(slides.style);
// 	showSlides();
// 	console.log(slides);
// 	console.log("fffffff");
// });
// global.$ss = ss;

// })(window);