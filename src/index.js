// index.js
import "./styles.css";
import loadHome from "./pages/home.js";
import { hello } from "./test.js"

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
});

console.log(hello)