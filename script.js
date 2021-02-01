// !!!!!!!! SELECT ITEMS !!!!!!!!
const header = document.querySelector("header");

const dotsContainer = document.getElementById("dots_container");
const dots = document.getElementsByClassName("dot");
const dotAmount = 100;
const dotSize = 10;
let addInterval = "";

const greeting1 = document.getElementById("greeting1");
const greeting2 = document.getElementById("greeting2");
const greeting3 = document.getElementById("greeting3");
const introName = document.getElementById("intro_name");
const introPortrait = document.getElementById("intro_portrait");
const about = document.getElementById("about");

// !!!!!!!! EVENT LISTENERS !!!!!!!!
// *** dots blinking effect
header.addEventListener("mouseenter", () => {
  // console.log("start");
  addInterval = setInterval(dotBlink, 1000);
});
header.addEventListener("mouseleave", () => {
  // console.log("stop");
  clearInterval(addInterval);
});

window.addEventListener("DOMContentLoaded", initializeApp);

// !!!!!!!! FUNCTION !!!!!!!!
function addDot() {
  for (let i = 0; i < dotAmount; i++) {
    let newDot = document.createElement("div");
    let size = Math.ceil(dotSize * Math.random());

    newDot.classList.add("dot");

    newDot.style.width = size + "px";
    newDot.style.height = size + "px";
    newDot.style.top = header.offsetHeight * Math.random() + "px";
    newDot.style.left = header.clientWidth * Math.random() + "px";
    // console.log(newDot);
    dotsContainer.appendChild(newDot);
  }
}

function dotBlink() {
  for (let i = 0; i < dots.length; i++) {
    let boolean = Math.random() * 10 > 5;
    dots[i].classList.remove("blink");
    if (boolean) {
      dots[i].classList.add("blink");
    }
  }
}

// !!!!!!!! INITIALIZE APP !!!!!!!!
function initializeApp() {
  // *** add slide in effect
  setTimeout(() => {
    introPortrait.classList.add("appear");
  }, 200);
  setTimeout(() => {
    about.classList.add("appear");
  }, 400);
  setTimeout(() => {
    greeting1.classList.add("appear");
  }, 400);
  setTimeout(() => {
    greeting2.classList.add("appear");
  }, 800);
  setTimeout(() => {
    greeting3.classList.add("appear");
  }, 1200);
  setTimeout(() => {
    introName.classList.add("appear");
  }, 1600);

  addDot();
}
