// Menu page
import loadMenuHeader from "../components/MenuHeader";
import loadMenuList from "../components/MenuList";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = "";

  const menuSection = document.createElement("section");
  menuSection.className = "container menu-section";

  menuSection.appendChild(loadMenuHeader());

  content.appendChild(menuSection);
  content.appendChild(loadMenuList());
}
