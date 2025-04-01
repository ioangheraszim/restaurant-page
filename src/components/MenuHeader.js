export default function loadMenuHeader() {
  const menuCard = document.createElement("div");
  menuCard.className = "menu-card__container";
  const menuContent = document.createElement("div");
  menuContent.className = "menu__content";

  const menuTitle = document.createElement("h5");
  const menuParagraph = document.createElement("p");
  const menuSeparator = document.createElement("div");
  menuTitle.className = "menu-card__title";
  menuTitle.textContent = "MADE FROM SCRATCH";
  menuParagraph.className = "menu-card__paragraph";
  menuParagraph.textContent =
    "The Miller menu is a celebration of the historic Mornington coastal region and its abundance of vibrant local producers.";
  menuSeparator.className = "separator separator--black";

  menuContent.appendChild(menuTitle);
  menuContent.appendChild(menuSeparator);
  menuContent.appendChild(menuParagraph);


  menuCard.appendChild(menuContent);

  return menuCard;
}
