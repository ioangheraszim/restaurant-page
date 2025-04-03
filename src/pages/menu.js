// Menu page
import loadTitleCard from "../components/titleCard";
import loadMenuList from "../components/MenuList";
import loadCarousel from "../components/MenuCarousel";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = "";

  content.appendChild(
    loadTitleCard(
      "THE MILLER ETHOS",
      "A collaboration of esteemed international chefs Andrew and Celia Miller in conjunction with our many local providers."
    )
  );
  content.appendChild(loadMenuList());
  content.appendChild(loadCarousel());

  return content;
}
