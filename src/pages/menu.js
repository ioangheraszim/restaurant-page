// Menu page
import loadTitleCard from "../components/titleCard";
import loadMenuList from "../components/MenuList";
import loadCarousel from "../components/carousel";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = "";

  content.appendChild(
    loadTitleCard(
      "MADE FROM SCRATCH",
      "The Miller menu is a celebration of the historic Mornington coastal region and its abundance of vibrant local producers."
    )
  );
  content.appendChild(loadMenuList());
  content.appendChild(loadCarousel());

  return content;
}
