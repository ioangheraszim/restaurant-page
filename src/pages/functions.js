// Functions Page

export default function loadFunctions() {
  const content = document.getElementById("content");
  content.textContent = "";

  content.appendChild(
    loadTitleCard(
      "FUNCTIONS AT MILLER",
      "Set the perfect atmosphere for your next event with Milton’s versatile indoor and outdoor hosting spaces."
    )
  );

  return content;
}
