// Menu page
import loadMenuHeader from "../components/MenuHeader";

export default function loadMenu() {
    const content = document.getElementById("content");
    content.textContent = "";

    const menuSection = document.createElement("section");
    menuSection.className = "menu-section";

    menuSection.appendChild(loadMenuHeader());
    content.appendChild(menuSection);
}
