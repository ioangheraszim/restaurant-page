// About page
import loadAboutsContent from "../components/AboutContent";
import loadTitleCard from "../components/titleCard";

export default function loadAbout() {
  const content = document.getElementById("content");
  content.textContent = "";

  content.appendChild(
    loadTitleCard(
      "THE MILLER ETHOS",
      "A collaboration of esteemed international chefs Andrew and Celia Miller in conjunction with our many local providers."
    )
  );

  content.appendChild(loadAboutsContent());

  return content;
}
