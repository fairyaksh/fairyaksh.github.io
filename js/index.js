/*---------- LAUNCH BTN SCROLL ----------*/
function smoothScroll() {
  window.scrollBy(0, 600);
}

/*---------- SUBMIT BTN ALERT ----------*/
function myFunction() {
  alert("Thank you for your stay!");
}

/*---------- CAROUSEL ----------*/

var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);

/* Slides */

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "slide";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "slide showing";
}
