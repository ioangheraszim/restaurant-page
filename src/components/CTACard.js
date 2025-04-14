// CTA Card file

import loadMenu from "../pages/menu";
import loadReservations from "../pages/reservations";
import scrollToTop from "../scripts/scrollTop";

export default function loadCTA() {
    const ctaSection = document.createElement('section');
    ctaSection.className = 'cta';

    const ctaContainer = document.createElement('div');
    ctaContainer.className = 'container cta__container';

    const ctaCard = document.createElement('div');
    ctaCard.className = 'cta__card';

    const ctaParagraph = document.createElement('p');
    ctaParagraph.className = 'title-card__paragraph cta-paragraph';
    ctaParagraph.textContent = 'Join us soon for great food and fine wine in a relaxed seaside setting';

    const btnContainer = document.createElement('ul');
    btnContainer.className = 'cta-buttons__container';

    const ctnBtnItemOne = document.createElement('li');
    const ctnBtnItemTwo = document.createElement('li');
    ctnBtnItemOne.className = 'cta__btn';
    ctnBtnItemTwo.className = 'cta__btn';
    

    const ctnBtnOne = document.createElement('button');
    const ctnBtnTwo = document.createElement('button');

    ctnBtnOne.className = 'text-content__btn';
    ctnBtnTwo.className = 'text-content__btn';
    ctnBtnOne.textContent = 'View Menu';
    ctnBtnTwo.textContent = 'Make a Reservation';

    ctnBtnOne.addEventListener("click", () => {
        loadMenu();
        scrollToTop();
    });
    
    ctnBtnTwo.addEventListener("click", () => {
        loadReservations();
        scrollToTop();
    });

    btnContainer.appendChild(ctnBtnItemOne);
    btnContainer.appendChild(ctnBtnItemTwo);

    ctnBtnItemOne.appendChild(ctnBtnOne);
    ctnBtnItemTwo.appendChild(ctnBtnTwo);

    ctaCard.appendChild(ctaParagraph);
    ctaCard.appendChild(btnContainer);
    
    ctaContainer.appendChild(ctaCard);
    ctaSection.appendChild(ctaContainer);

    return ctaSection;
}