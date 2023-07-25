// var count = 0;
// var inc = 0;
// var margin = 0;
// var slider = document.getElementsByClassName("rated-card")[0];
// itemDisplay = 0;
// if (screen.width > 990) {
//   itemDisplay = document
//     .getElementsByClassName("rated-cards")[0]
//     .getAttribute("item-display-d");
// }
// console.log(itemDisplay)

// const logos = document.querySelector(".working-company_logo");

// let isDragStart = false,
//   prevPageX,
//   prevScrollLeft;

// const dragStart = () => {
//   isDragStart = true;
//   prevPageX=e.pageX;
//   prevScrollLeft=logos.scrollLeft
// };
// const dragging = (e) => {
//   if (!isDragStart) return;
//   e.preventDefault();
//   logos.scrollLeft = e.pageX;
// };

// const dragStop = () => {
//   isDragStart = false;
// };

// logos.addEventListener("mousedown", dragStart);
// logos.addEventListener("mousemove", dragging);

const resourceSlider = document.getElementById("resource-slider");
const featureCard = document.querySelectorAll(".feature-card");
const ratedCards = document.getElementById("rated-cards");
const ratedCard = document.querySelectorAll(".rated-card");
const workingCompanyLogo = document.getElementById("working-company_logo");
const companyLogo = document.querySelectorAll(".company-logo");

let currentIndex = 0;
const numVisibleItems = 3;

function showfeatureCard() {
  const slideWidth = featureCard[0].offsetWidth;
  // const slidewidth=ratedCard[0].offsetWidth;
  // const offSet=-currentIndex*slidewidth
  const offset = -currentIndex * slideWidth;
  resourceSlider.style.transform = `translateX(${offset}px)`;
  ratedCards.style.transform = `translateX(${offset}px)`;
  workingCompanyLogo.style.transform = `translateX(${offset})`;
}

// function nextSlide() {
//   currentIndex = Math.min(
//     currentIndex + 1,
//     featureCard.length - numVisibleItems
//   );
//   showfeatureCard();
// }

// function prevSlide() {
//   currentIndex = Math.max(currentIndex - 1, 0);
//   showfeatureCard();
// }

// showfeatureCard();

function nextSlide() {
  currentIndex =
    (currentIndex + 1) % (featureCard.length - numVisibleItems + 1);
  showfeatureCard();
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + featureCard.length) %
    (featureCard.length - numVisibleItems + 1);
  showfeatureCard();
}

function autoPlay() {
  nextSlide();
}

// const autoPlayInterval =
setInterval(autoPlay, 3000);

// carousel.addEventListener("mouseover", () => {
//   clearInterval(autoPlayInterval);
// });

// carousel.addEventListener("mouseout", () => {
//   autoPlayInterval = setInterval(autoPlay, 3000);
// });

showfeatureCard();
