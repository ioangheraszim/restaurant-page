export default function loadMenuHeader() {
    const menuContent = document.createElement('div');
    menuContent.className = 'menu__content';

    const menuTitle = document.createElement('h5');
    const menuParagraph = document.createElement('p');
    const menuSeparator = document.createElement('div');
    menuTitle.className = 'menu-card__title';
    menuParagraph.className = 'menu-card__paragraph';
    menuSeparator.className = 'separator separator--black';

    menuContent.appendChild(menuTitle);
    menuContent.appendChild(menuParagraph);
    menuContent.appendChild(menuSeparator);

    return menuContent;
}