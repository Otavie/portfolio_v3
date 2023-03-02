const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const faSun = document.querySelector('.fa-sun');
const faMoon = document.querySelector('.fa-moon');

function showMobileMenu(){
    mobileMenu.classList.toggle('active')
}

function toggleMoon(){
    faMoon.classList.toggle('hide')
    faSun.classList.toggle('active')
}

faMoon.addEventListener('click', toggleMoon)
faSun.addEventListener('click', toggleMoon)
mobileMenuButton.addEventListener('click', showMobileMenu)

const fingerDown = document.querySelector('.finger-down');

fingerDown.classList.add('fade-in');
fingerDown.addEventListener('animationend', () =>{
    fingerDown.classList.remove('fade-in');
    fingerDown.classList.add('fade-out')
})

const dayAndDarkMode = document.querySelector('.day-and-dark-mode');
const containerContent = document.querySelector('.container-content');
const projectsItemContentsWriteAll = document.querySelectorAll('.projects-item-contents-write');
const footer = document.querySelector('.footer');
const sendMail = document.querySelector('.send-mail');
const viewResume = document.querySelector('.view-resume');
const smileEmoji = document.querySelector('.smile-emoji');
const lines = document.querySelectorAll('.lines');
const aboutMeEmphasises = document.querySelectorAll('.about-me-emphasise');
const headingH2S = document.querySelectorAll('.heading-h2');
const socialImgs = document.querySelectorAll('.social-img');
const paragraphs = document.querySelectorAll('.paragraphs');
const subHeadings = document.querySelectorAll('.sub-heading');
const toolsUsed = document.querySelectorAll('.tools-used');
const pipes = document.querySelectorAll('.pipes');
const skillSetsImgs = document.querySelectorAll('.skill-sets__img img');
function toggleDayAndNight(){
    containerContent.classList.toggle('day');
    projectsHead.classList.toggle('day');
    footer.classList.toggle('day');
    aboutMeHead.classList.toggle('day');
    sendMail.classList.toggle('day');
    viewResume.classList.toggle('day');
    smileEmoji.classList.toggle('day');

    projectsItemContentsWriteAll.forEach(projectsItemContentsWrite =>{
        projectsItemContentsWrite.classList.toggle('day');
    });

    lines.forEach(line =>{
        line.classList.toggle('day');
    });

    paragraphs.forEach(paragraph =>{
        paragraph.classList.toggle('day');
    });

    aboutMeEmphasises.forEach(aboutMeEmphasise =>{
        aboutMeEmphasise.classList.toggle('day');
    });

    headingH2S.forEach(headingH2 =>{
        headingH2.classList.toggle('day');
    });

    socialImgs.forEach(socialImg =>{
        socialImg.classList.toggle('day');
    });

    subHeadings.forEach(subHeading =>{
        subHeading.classList.toggle('day');
    });

    toolsUsed.forEach(toolUsed =>{
        toolUsed.classList.toggle('day');
    });

    pipes.forEach(pipe =>{
        pipe.classList.toggle('day');
    });

    skillSetsImgs.forEach(skillSetsImg =>{
        skillSetsImg.classList.toggle('day');
    });
}

dayAndDarkMode.addEventListener('click', toggleDayAndNight);


const project1Img1Left = document.querySelector('.project-1-img-1-left');
const project1Img1Right = document.querySelector('.project-1-img-1-right');

project1Img1Right.addEventListener('mouseenter', ()=>{
    project1Img1Left.style.opacity = 0;
});

project1Img1Right.addEventListener('mouseleave', ()=>{
    project1Img1Left.style.opacity = 1;
});


const project3Img3Left = document.querySelector('.project-3-img-3-left');
const project3Img3Right = document.querySelector('.project-3-img-3-right');

project3Img3Right.addEventListener('mouseenter', ()=>{
    project3Img3Left.style.opacity = 0;
});

project3Img3Right.addEventListener('mouseleave', ()=>{
    project3Img3Left.style.opacity = 1;
});