// Hero section
export default function loadHero() {
  const heroContainer = document.createElement("div");
  heroContainer.className = "hero__container";

  const heroContent = document.createElement("div");
  heroContent.className = "hero__content";

  const heroTitle = document.createElement("h1");
  heroTitle.className = "hero__title";
  heroTitle.textContent = "Celebrating the bounty of the sea!";

  const heroSeparator = document.createElement("div");
  heroSeparator.className = "separator";

  const heroParagraph = document.createElement("p");
  heroParagraph.className = "hero__paragraph";
  heroParagraph.textContent = "14 paramore street, mornington";

  // Hero Button Container
  const heroBtnContainer = document.createElement("div");
  const heroBtn = document.createElement("button");
  const btnIcon = document.createElement("i");
  btnIcon.className = "fa-solid fa-arrow-down";

  heroBtnContainer.appendChild(heroBtn);
  heroBtnContainer.className = "hero__btn__container";
  heroBtn.appendChild(btnIcon);

  // Hero Content
  heroContent.appendChild(heroTitle);
  heroContent.appendChild(heroSeparator);
  heroContent.appendChild(heroParagraph);

  // Hero Container
  heroContainer.appendChild(heroContent);
  heroContainer.appendChild(heroBtnContainer);

  // Returns hero container
  return heroContainer;
}
