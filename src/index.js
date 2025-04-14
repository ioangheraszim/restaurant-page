// index.js
import "./styles.css";
import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadAbout from "./pages/about.js";
import loadFunctions from "./pages/functions.js";
import loadReservations from "./pages/reservations.js";
import loadNews from "./pages/news.js";
import scrollToTop from "./scripts/scrollTop.js";

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menu-hamburger");
  const homeButtons = document.querySelector(".home--buttons");

  menuBtn.addEventListener("click", () => {
    homeButtons.classList.toggle("active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      homeButtons.classList.remove("active");
    }
  });

  // solo logo button
  const homeButton = document.getElementById("home");
  homeButton.addEventListener("click", () => {
    loadHome();
    scrollToTop();
    homeButtons.classList.remove("active");
  });

  // navigation menu buttons
  const buttonActions = {
    menu: loadMenu,
    about: loadAbout,
    functions: loadFunctions,
    news: loadNews,
    reservations: loadReservations,
  };

  Object.keys(buttonActions).forEach((id) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", () => {
        buttonActions[id]();
        scrollToTop();
        homeButtons.classList.remove("active");
      });
    }
  });
});
