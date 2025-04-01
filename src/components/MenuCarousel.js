// Menu Carousel 

import firstImage from '../assets/carousel-1.jpg';
import secondImage from '../assets/carousel-2.jpg';
import thirdImage from '../assets/carousel-3.jpg';

export default function loadCarousel() {
    const carouselSection = document.createElement('section');
    carouselSection.className = 'carousel-section';

    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'container carousel-container';

    const carousel = document.createElement("div");
    carousel.className = 'carousel';

    const btnPrev = document.createElement('button');
    btnPrev.className = 'prev';
    const btnNext = document.createElement('button');
    btnNext.className = 'next';

    const iconPrev = document.createElement('i');
    iconPrev.className = 'fa-solid fa-circle-arrow-left';
    const iconNext = document.createElement('i');
    iconNext.className = 'fa-solid fa-circle-arrow-right';

    btnPrev.appendChild(iconPrev);
    btnNext.appendChild(iconNext);

    const carouselInner = document.createElement('div');
    carouselInner.className = 'carousel-inner';

    const imageSources = [
        { src: firstImage, alt: "Image 1", className: "active" },
        { src: secondImage, alt: "Image 2" },
        { src: thirdImage, alt: "Image 3" },
    ];

    imageSources.forEach((imageData) => {
        const img = document.createElement("img");
        img.src = imageData.src;
        img.alt = imageData.alt;
        if (imageData.className) {
            img.className = imageData.className;
        }
        carouselInner.appendChild(img);
    });


    carousel.appendChild(btnPrev)
    carousel.appendChild(carouselInner)
    carousel.appendChild(btnNext)
    carouselContainer.appendChild(carousel);
    carouselSection.appendChild(carouselContainer); 
    
    return carouselSection;
}