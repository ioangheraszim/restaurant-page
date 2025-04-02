// Home Content
import { cardsData } from "../data/contentData";

export default function homeContent() {
  const contentContainer = document.createElement("div");
  contentContainer.className = "container content__container";

  cardsData.forEach((card) => {
    // Create the content card
    const contentCard = document.createElement("div");
    contentCard.className = "content__card";

    // Image Container

    const contentImageContainer = document.createElement("div");
    contentImageContainer.className = "content__image--container";

    const contentImage = document.createElement("img");
    contentImage.className = "content__image";
    contentImage.src = card.src;
    contentImage.alt = card.alt;
    contentImageContainer.appendChild(contentImage);

    // Text Content

    const textContent = document.createElement("div");
    const textTitle = document.createElement("p");
    textTitle.className = "text-content__title";
    textTitle.textContent = card.title;

    const textPara = document.createElement("h2");
    textPara.className = "text-content__para";
    textPara.textContent = card.description;

    const textButton = document.createElement("button");
    textButton.className = "text-content__btn";
    textButton.textContent = card.buttonText;

    textContent.appendChild(textTitle);
    textContent.appendChild(textPara);
    textContent.appendChild(textButton);

    // Append image and text to the card
    contentCard.appendChild(contentImageContainer);
    contentCard.appendChild(textContent);
    contentContainer.appendChild(contentCard);
  });

  return contentContainer;
}
