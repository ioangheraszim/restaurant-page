// Functions Page
import loadTitleCard from "../components/titleCard";
import loadCarousel from "../components/carousel";
import loadReservationCard from "../components/ReservationCard";
import loadContactForm from "../components/ContactForm";

export default function loadFunctions() {
  const content = document.getElementById("content");
  content.textContent = "";

  content.appendChild(
    loadTitleCard(
      "FUNCTIONS AT MILLER",
      "Set the perfect atmosphere for your next event with Milton’s versatile indoor and outdoor hosting spaces."
    )
  );

  content.appendChild(loadReservationCard());
  content.appendChild(loadCarousel());
  content.appendChild(loadContactForm("Send Enquiry"));

  return content;
}
