// About Content
import { aboutData } from "../data/contentData";
import loadCTA from "./CTACard";

export default function loadAboutsContent() {
    const abouts = document.createElement('section');
    abouts.className = 'abouts';

    const aboutsContainer = document.createElement('div');
    aboutsContainer.className = 'container abouts-container';

    aboutData.forEach((data) => {
        const contentBlock = document.createElement('div');
        contentBlock.className = 'abouts__content';

        // Para Container
        const paraContainer = document.createElement('div');
        paraContainer.className = 'para__container';

        const paraTitle = document.createElement('h5');
        paraTitle.className = 'para__title';
        paraTitle.textContent = data.title;

        const paraContent = document.createElement('p');
        paraContent.className = 'para__content';
        paraContent.innerHTML = data.content.join('<br /><br />');

        paraContainer.appendChild(paraTitle);
        paraContainer.appendChild(paraContent);

        // Image Container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'abouts-image__container';

        const image = document.createElement('img');
        image.className = 'about__image';
        image.src = data.image;
        image.alt = data.alt;

        imageContainer.appendChild(image);

        // Append to Content Block
        contentBlock.appendChild(paraContainer);
        contentBlock.appendChild(imageContainer);

        aboutsContainer.appendChild(contentBlock);
    });

    abouts.appendChild(aboutsContainer);
    abouts.appendChild(loadCTA());

    return abouts;
}
