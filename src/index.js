// index.js
import "./styles.css";
import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadAbout from "./pages/about.js";

import { hello } from "./test.js";

document.addEventListener("DOMContentLoaded", () => {
  loadAbout();
  // loadMenu();
  // loadHome();

  const images = document.querySelectorAll(".carousel-inner img");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;

  function updateCarousel() {
    images.forEach((img, index) => {
      img.classList.toggle("active", index === currentIndex);
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  updateCarousel();
});

console.log(hello);