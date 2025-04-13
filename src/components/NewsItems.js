import { newsItems } from "../data/contentData";

export default function loadNewsItems() {
  const newsContainer = document.createElement("section");
  newsContainer.className = "news"; // Set the outer container class

  const container = document.createElement("div");
  container.className = "container news__container";

  const grid = document.createElement("div");
  grid.className = "news__grid";

  newsItems.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.className = "news__item";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "news__image-wrapper";

    const image = document.createElement("img");
    image.className = "news__image";
    image.src = item.imageSrc;
    image.alt = item.title;
    imageWrapper.appendChild(image);

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "news__content";

    const date = document.createElement("h6");
    date.className = "news__date";
    date.textContent = item.date;

    const title = document.createElement("h2");
    title.className = "news__title";
    title.textContent = item.title;

    contentWrapper.appendChild(date);
    contentWrapper.appendChild(title);

    newsItem.appendChild(imageWrapper);
    newsItem.appendChild(contentWrapper);

    grid.appendChild(newsItem);
  });

  container.appendChild(grid);
  newsContainer.appendChild(container);

  return newsContainer;
}
