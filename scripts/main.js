import '../styles/global.css';
import '../styles/style.css';

import { animate } from "animejs";

const clickableImage = document.querySelector('.mainImage');
clickableImage.onclick = () => {
    animate('.mainImage__eye', {
        translateY: -100,
        duration: 350
    })
}