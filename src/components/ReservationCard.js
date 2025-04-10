import { functionsData } from "../data/contentData";

export default function loadReservationCard() {
    const funSection = document.createElement('section');
    funSection.className = 'functions';

    const funContainer = document.createElement('div');
    funContainer.className = 'container functions__container';

    functionsData.forEach((data) => {
        const funCard = document.createElement('div');
        funCard.className = 'functions__card';

        const info = document.createElement('div');
        info.className = 'info';

        const infoHeader = document.createElement('div');
        infoHeader.className = 'info__header';

        const headerTitle = document.createElement('h3');
        headerTitle.className = 'title title--large';
        headerTitle.textContent = data.title;

        const headerSubtitle = document.createElement('p');
        headerSubtitle.className = 'subtitle';
        headerSubtitle.textContent = data.subtitle;

        const descP = document.createElement('p');
        descP.className = 'description';
        descP.innerHTML = data.description;

        const btnDiv = document.createElement('div');
        const btnFunction = document.createElement('button');
        btnFunction.className = 'btn btn--subline';
        btnFunction.textContent = data.buttonText;
        btnDiv.appendChild(btnFunction);

        const imgContainer = document.createElement('div');
        imgContainer.className = 'image__container';

        const theImage = document.createElement('img');
        theImage.className = 'image';
        theImage.src = data.imageSrc;
        theImage.alt = data.imageAlt;

        imgContainer.appendChild(theImage);

        // Append children in correct order
        infoHeader.appendChild(headerTitle);
        infoHeader.appendChild(headerSubtitle);
        info.appendChild(infoHeader);
        info.appendChild(descP);
        info.appendChild(btnDiv);
        funCard.appendChild(info);
        funCard.appendChild(imgContainer);
        funContainer.appendChild(funCard);
    });

    funSection.appendChild(funContainer);

    return funSection;
}
