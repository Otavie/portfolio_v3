const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const faSun = document.querySelector('.fa-sun');
const faMoon = document.querySelector('.fa-moon');
const landingContainer = document.querySelector('.landing-container');

function showMobileMenu(){
    mobileMenu.classList.toggle('active');
    header.classList.toggle('fixed');
    landingContainer.classList.toggle('fixed');
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
const header = document.querySelector('header');
const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomRight = document.querySelector('.bottom-right');
const bottomLeft = document.querySelector('.bottom-left');
const landing = document.querySelector('.landing');
const projectsItemContentsWriteAll = document.querySelectorAll('.projects-item-contents-write');
const footer = document.querySelector('.footer');
const hr = document.querySelector('.hr');
const sendMail = document.querySelector('.send-mail');
const viewResume = document.querySelector('.view-resume');
const smileEmoji = document.querySelector('.smile-emoji');
const lines = document.querySelectorAll('.lines');
const education = document.querySelectorAll('.education');
const aboutMeEmphasises = document.querySelectorAll('.about-me-emphasise');
const headingH2S = document.querySelectorAll('.heading-h2');
const socialImgs = document.querySelectorAll('.social-img');
const paragraphs = document.querySelectorAll('.paragraphs');
const subHeadings = document.querySelectorAll('.sub-heading');
const toolsUsed = document.querySelectorAll('.tools-used');
const pipes = document.querySelectorAll('.pipes');
const skillSetsImgs = document.querySelectorAll('.skill-sets__img img');
const projectsItemContentsLefts = document.querySelectorAll('.projects-item-contents-left');
const projectsItemContentsRight = document.querySelector('.projects-item-contents-right');
function toggleDayAndNight(){
    containerContent.classList.toggle('day');
    projectsHead.classList.toggle('day');
    footer.classList.toggle('day');
    hr.classList.toggle('day');
    aboutMeHead.classList.toggle('day');
    sendMail.classList.toggle('day');
    viewResume.classList.toggle('day');
    smileEmoji.classList.toggle('day');
    topLeft.classList.toggle('day');
    topRight.classList.toggle('day');
    bottomRight.classList.toggle('day');
    bottomLeft.classList.toggle('day');
    landing.classList.toggle('day');
    header.classList.toggle('day');
    mobileMenu.classList.toggle('day');
    faSun.classList.toggle('day');

    education.forEach(educate =>{
        educate.classList.toggle('day');
    });

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

    projectsItemContentsLefts.forEach(projectsItemContentsLeft =>{
        projectsItemContentsLeft.classList.toggle('day');
    });

    projectsItemContentsRight.classList.toggle('day');
}

dayAndDarkMode.addEventListener('click', toggleDayAndNight);


project1Img1Right.addEventListener('mouseenter', ()=>{
    project1Img1Left.style.opacity = 0;
});

project1Img1Right.addEventListener('mouseleave', ()=>{
    project1Img1Left.style.opacity = 1;
});

project3Img3Right.addEventListener('mouseenter', ()=>{
    project3Img3Left.style.opacity = 0;
});

project3Img3Right.addEventListener('mouseleave', ()=>{
    project3Img3Left.style.opacity = 1;
});


project2Img2Left.addEventListener('mouseenter', ()=>{
    project2Img2Right.style.opacity = 0;
});

project2Img2Left.addEventListener('mouseleave', ()=>{
    project2Img2Right.style.opacity = 1;
});


const aboutMeButton = document.querySelectorAll('.about-me-button');
const buttonContent = document.querySelectorAll('.button-content');


function showTab(button) {
    buttonContent.forEach(item => {
        item.style.display = 'none';
    });
    
    document.getElementById(button).style.display = 'flex';
    document.getElementById(button).style.flexDirection = 'column';
}

aboutMeButton.forEach(btn => {
    btn.addEventListener('click', function() {
        const button = this.dataset.button;
        showTab(button);
    });
});
  
showTab('button-1');