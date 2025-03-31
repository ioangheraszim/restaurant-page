// Home Page
import loadHero from "../components/hero";

export default function loadHome() {
    const content = document.getElementById('content');
    content.textContent = '';

    const hero = document.createElement('section');
    hero.className = 'hero-section';



    hero.appendChild(loadHero());

    content.appendChild(hero)
}