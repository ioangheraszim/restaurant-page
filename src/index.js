// index.js
import "./styles.css";
import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadAbout from "./pages/about.js";
import loadFunctions from "./pages/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  // loadHome();

  // // solo logo button
  // const homeButton = document.getElementById("home");
  // homeButton.addEventListener("click", () => {
  //   loadHome();
  // });

  // // navigation menu buttons
  // const buttonActions = {
  //   menu: loadMenu,
  //   about: loadAbout,
  //   functions: loadFunctions,
  //   // news: loadNews,
  //   // reservations: loadReservations,
  // };

  // Object.keys(buttonActions).forEach((id) => {
  //   const button = document.getElementById(id);
  //   if (button) {
  //     button.addEventListener("click", buttonActions[id]);
  //   }
  // });
});
