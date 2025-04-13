// News page
import loadNewsItems from "../components/NewsItems";
import loadTitleCard from "../components/titleCard";
import loadCTA from "../components/CTACard";
export default function loadNews() {
  const content = document.getElementById("content");
  content.textContent = "";

  content.appendChild(
    loadTitleCard(
      "NEWS & INTERVIEWS",
      "Each month we share restaurant updates and interviews with some of the local producers that feature on our menu"
    )
  );

  content.appendChild(loadNewsItems());
  content.appendChild(loadCTA());
  return content;
}
