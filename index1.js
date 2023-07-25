const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slideWidth = carousel.clientWidth;
const slideCount = carousel.children.length;
let currentIndex = 0;

// Function to slide to the specified index
function slideToIndex(index) {
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

// Function to handle the "Previous" button click
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    slideToIndex(currentIndex - 1);
  }
});

// Function to handle the "Next" button click
nextBtn.addEventListener("click", () => {
  if (currentIndex < slideCount - 1) {
    slideToIndex(currentIndex + 1);
  }
});












Copy code
// set index and transition delay
let index = 0;
let transitionDelay = 2000;

// get div containing the slides
let slideContainer = document.querySelector(".slideshow");
// get the slides
let slides = slideContainer.querySelectorAll(".slide");

// set transition delay for slides
for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay/1000}s linear`;
}

// show the first slide
showSlide(index);

// show a specific slide
function showSlide(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? "block" : "none";
  });
  // next index
  index++;
  // go back to 0 if at the end of slides
  if (index >= slides.length) {
    index = 0;
  }
}

// transition to next slide every x seconds
setInterval (() => showSlide(index), transitionDelay);