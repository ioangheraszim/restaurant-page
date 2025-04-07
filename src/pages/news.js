// News page
import loadTitleCard from "../components/titleCard";

export default function loadNews() {
  const content = document.getElementById("content");
  content.textContent = "";

  content.appendChild(
    loadTitleCard(
      "NEWS & INTERVIEWS",
      "Each month we share restaurant updates and interviews with some of the local producers that feature on our menu"
    )
  );

  return content;
}
