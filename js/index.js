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

/*---------- Play/Pause Button ----------*/

var playing = true;
var pauseButton = document.getElementById("pause");

function pauseSlideshow() {
  pauseButton.innerHTML = "&#9658;"; // play character
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = "&#10074;&#10074;"; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide, 4000);
}

pauseButton.onclick = function () {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

var next = document.getElementById("next");
var prev = document.getElementById("prev");

next.onclick = function () {
  pauseSlideshow();
  nextSlide();
};
prev.onclick = function () {
  pauseSlideshow();
  previousSlide();
};

/*---------- Keyboard controls ----------*/

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode === 37) {
    // left arrow
    previousSlide();
  } else if (e.keyCode === 39) {
    // right arrow
    nextSlide();
  }
}
