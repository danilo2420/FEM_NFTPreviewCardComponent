import '../styles/global.css';
import '../styles/style.css';
import { animate, stagger } from "animejs";

const container = document.querySelector('.container');
container.style.left = '-250px';

animate('.container', {
    duration: 1500,
    opacity: 1,
    translateX: 250
});

animate('.container', {
    duration: 3000,
    opacity: 1
});


// Eye jump animation on click
const clickableImage = document.querySelector('.mainImage');
let animationAvailable = true;
clickableImage.onclick = () => {
    if (animationAvailable) {
        animate('.mainImage__eye', {
            // Property keyframes
            y: [
                { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
            ],
            // Property specific parameters
            rotate: {
                from: '-1turn',
                delay: 0
            },
            delay: stagger(50),
            ease: 'inOutCirc',
            loopDelay: 1000,
            loop: false
        });
        animationAvailable = false;
        setTimeout(() => animationAvailable = true, 1500);
    }
}

// User picture rotates on click
const userImage = document.querySelector('.content__bottom__image');
let aux = true;
userImage.onclick = () => {
    if (aux) {
        animate(userImage, {
            duration: 1000,
            rotate: 360
        })
    } else {
        animate(userImage, {
            duration: 1000,
            rotate: 0
        })
    }
    aux = !aux;
}