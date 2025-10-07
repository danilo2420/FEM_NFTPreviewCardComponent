import '../styles/global.css';
import '../styles/style.css';
import { animate, createTimer, stagger } from "animejs";

// Initial animation
const container = document.querySelector('.container');
container.style.left = '-250px';

animate('.container', {
    duration: 1500,
    opacity: 1,
    translateX: 250,
    ease: 'outBack'
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
let aux = 0;
userImage.onclick = () => {
    aux = aux == 0 ? 360 : 0;
    animate(userImage, {
        duration: 1000,
        rotate: aux
    });
    animate(userImage, {
        duration: 1000,
        scale: [1, 1.1, 1]
    });
}

// Little diamond icon jumps
const diamondIcon = document.querySelector('.content__top__data__left__icon');
diamondIcon.onclick = () => {
    animate(diamondIcon, {
        y: [
            {to: '-1rem', duration: 200, ease: 'outExpo'},
            {to: 0, duration: 600, ease: 'outBounce'},
        ]
    })
}

// Clock icon rotates
const clockIcon = document.querySelector('.content__top__data__right__icon');
let deg = 0;
clockIcon.onclick = () => {
    deg += 360;
    animate(clockIcon, {
        rotate: deg,
        duration: 1000
    });
}