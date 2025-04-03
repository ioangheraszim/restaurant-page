//  Title Card for pages
export default function loadTitleCard(title, paragraph) {
  const titleSection = document.createElement("section");
  titleSection.className = "title-section";
  const titleCard = document.createElement("div")
  titleCard.className = "container title-card__container";
  const titleContent = document.createElement("div");
  titleContent.className = "menu__content";

  const titleTitle = document.createElement("h5");
  const titleParagraph = document.createElement("p");
  const titleSeparator = document.createElement("div");
  titleTitle.className = "title-card__title";
  titleTitle.textContent = title;
  titleParagraph.className = "title-card__paragraph";
  titleParagraph.textContent = paragraph;
  titleSeparator.className = "separator separator--black";

  titleContent.appendChild(titleTitle);
  titleContent.appendChild(titleSeparator);
  titleContent.appendChild(titleParagraph);

  titleCard.appendChild(titleContent);
  titleSection.appendChild(titleCard);

  return titleSection;
}
