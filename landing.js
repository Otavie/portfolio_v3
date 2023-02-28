let scrollTrigger = false;
function frontendDev(){
    if (window.scrollY >= 100 && !scrollTrigger){
        scrollTrigger = true;
        // gsap.to(".write-up-2", {duration: 1.5, y: '80vh', ease: "Bounce.easeOut"});    
        gsap.fromTo(".write-up-2", {opacity: 0, y: '-80vh'}, {duration: 1.5, opacity: 1, y: '80vh', ease: "Bounce.easeOut"});    
    } else if (window.scrollY < 100 && scrollTrigger){
        scrollTrigger = false;
        gsap.fromTo(".write-up-2", {opacity: 1, y: '80vh'}, {duration: 1, opacity: 0, y: '-80vh', ease: "power2.easeOut"});
        // gsap.to(".write-up-2", {duration: 1, y: '-80vh', ease: "power2.easeOut"});
    }
}

window.addEventListener('scroll', frontendDev);


gsap.to(".d", {duration: 2, x: '-40vw', ease: "power4.easeOut"}, 1);
gsap.to(".d", {duration: 1.5, opacity:0, ease: "Power0.easeNone"}, 2.5);
gsap.to(".o", {duration: 2, x: '40vw', ease: "power4.easeOut"}, 1);
gsap.to(".o", {duration: 1.5, opacity:0, ease: "Power0.easeNone"}, 2.5);
gsap.to(".w", {duration: 2.5, y: '30vh', ease: "power4.easeOut"}, 1);
gsap.to(".w", {duration: 1.5, opacity:0, ease: "Power0.easeNone"}, 2.5);

function gsapDesktop() {
    gsap.fromTo(".landing", {duration: 2, x: '-100%', ease: "power2.easeOut"}, {duration: 1, x: '0%', ease: "power2.easeOut"}, 3)
    gsap.fromTo(".landing-photo", {duration: 2, width:"100%"}, {duration: 1, width:"65%", ease: "power2.easeOut"}, 3)
    
    gsap.fromTo(".write-up", {duration: 1, opacity: 0, scale: 0, ease: "power4.easeOut"}, {duration: 4, opacity: 1, scale: 1.65, ease: "power4.easeOut"}, 1);
    gsap.to(".write-up", {duration: 1.5, x: '-50vw', ease: "power4.easeOut"}, 3);
    gsap.to(".write-up", {duration: 1.5, rotation: '-90__cc', x: '-32vw', y: '0vh', ease: "power4.easeOut"}, 3.5);
    
    gsap.fromTo(".write-up", {duration: 0, scale: 1.65, ease: "power4.easeOut"}, {duration: 1, scale: 1, ease: "power4.easeOut"}, 4.5);
    gsap.fromTo(".landing-img", {duration: 1, opacity: 1, ease: "Power0.easeNone"}, {duration: 4.5, opacity: 0, ease: "Power0.easeNone"}, 3);
    gsap.fromTo(".landing-photo-2", {duration: 1, x: '0%', ease: "Power0.easeNone"}, {duration: 2, x: '-100%', ease: "Power0.easeNone"}, 5);
}
    
function gsapMobile(){
    gsap.fromTo(".landing", {duration: 2, x: '-100%', ease: "power2.easeOut"}, {duration: 1, x: '0%', ease: "power2.easeOut"}, 3)
    gsap.fromTo(".landing-photo", {duration: 2, width:"100%"}, {duration: 1, width:"65%", ease: "power2.easeOut"}, 3)
    
    gsap.fromTo(".write-up", {duration: 1, opacity: 0, scale: 0, ease: "power4.easeOut"}, {duration: 4, opacity: 1, scale: 1.65, ease: "power4.easeOut"}, 1);
    gsap.to(".write-up", {duration: 1.5, y: '-30vh', ease: "power4.easeOut"}, 3);
    gsap.to(".write-up", {duration: 1.5, rotation: '0', x: '0vw', ease: "power4.easeOut"}, 3.5);
    
    gsap.fromTo(".write-up", {duration: 0, scale: 1.65, ease: "power4.easeOut"}, {duration: 1, scale: 1, ease: "power4.easeOut"}, 4.5);
    gsap.fromTo(".landing-img", {duration: 1, opacity: 1, ease: "Power0.easeNone"}, {duration: 4.5, opacity: 0, ease: "Power0.easeNone"}, 3);
    gsap.fromTo(".landing-photo-2", {duration: 1, x: '0%', ease: "Power0.easeNone"}, {duration: 2, x: '-100%', ease: "Power0.easeNone"}, 5);
}    

// const mobileMenu = document.querySelector('.mobile-menu');
const writeUp = document.querySelector('.write-up');
var mediaQuery = window.matchMedia("(min-width: 600px)");
var delay = 0;
let timeout = false

function windowLoads(){
    if (mediaQuery.matches){
        writeUp.classList.remove('transition');

        clearTimeout(timeout);
        timeout = setTimeout(gsapDesktop, delay);
    }else{   
        clearTimeout(timeout);
        timeout = setTimeout(gsapMobile, delay);
        // writeUp.classList.add('removeTransition');
    }
}

window.onload = windowLoads()

function reSizeWindow(){
    if (mediaQuery.matches){
        writeUp.classList.add('show');
        clearTimeout(timeout);
        timeout = setTimeout(gsapDesktop, delay);
        writeUp.classList.add('transition');
    }else{
        writeUp.classList.remove('show');
        clearTimeout(timeout);
        timeout = setTimeout(gsapMobile, delay);
        writeUp.classList.add('transition');
    }
}

window.addEventListener('resize', reSizeWindow)


