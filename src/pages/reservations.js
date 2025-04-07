// News page
import loadTitleCard from "../components/titleCard";

export default function loadReservations() {
  const content = document.getElementById("content");
  content.textContent = "";

  content.appendChild(
    loadTitleCard(
      "MAKE A RESERVATION",
      "Reserve a table for an unforgettable dining experience and arrive early to enjoy a cocktail at the bar"
    )
  );

  return content;
}
