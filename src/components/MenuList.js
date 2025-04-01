// MenuList.js
import { menuData } from "../data/contentData";

export default function loadMenuList() {
  const menu = document.createElement("section");
  menu.className = "menu";

  menuData.forEach((item) => {
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu__container";

    const menuHeader = document.createElement("div");
    menuHeader.className = "menu__header";
    const menuTitle = document.createElement("p");
    menuTitle.className = "menu__title";
    menuTitle.textContent = item.title;

    const menuSubtitle = document.createElement("p");
    menuSubtitle.className = "menu__subtitle";
    menuSubtitle.textContent = item.subtitle;

    menuHeader.appendChild(menuTitle);
    menuHeader.appendChild(menuSubtitle);

    const menuList = document.createElement("ul");
    menuList.className = "menu__list";

    item.items.forEach((serving) => {
      const menuItem = document.createElement("li");
      menuItem.className = "menu__item";
      const menuDish = document.createElement("p");
      menuDish.className = "menu__dish";
      menuDish.textContent = serving.dish;
      const menuPrice = document.createElement("p");
      menuPrice.className = "menu__price";
      menuPrice.textContent = serving.price;

      menuItem.appendChild(menuDish);
      menuItem.appendChild(menuPrice);

      menuList.appendChild(menuItem);
    });

    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(menuList);
    menu.appendChild(menuContainer);
  });

  return menu;
}
