// About page
import loadTitleCard from "../components/titleCard";
export default function loadAbout() {
    const content = document.getElementById("content");
    content.textContent = "";

    content.appendChild(loadTitleCard());

    return content;
}