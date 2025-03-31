// Home Page
import loadHero from "../components/hero";
import homeContent from "../components/content";

export default function loadHome() {
    const content = document.getElementById('content');
    content.textContent = '';

    const hero = document.createElement('section');
    hero.className = 'hero-section';

    const contentSection = document.createElement('section');
    contentSection.className = 'content-section';

    hero.appendChild(loadHero());
    contentSection.appendChild(homeContent());
    content.appendChild(hero);
    content.appendChild(contentSection);
}