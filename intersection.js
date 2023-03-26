// For the Project Head Title
const projectsHead = document.querySelector('.projects-head');
const projectsHeadH1 = document.querySelector('.projects-head-h1');
options = {
    threshold: 0.5
}

optionsTwo = {
    threshold: 0.3
}

function toggleProjectsH1(entries){
    entries.forEach(entry =>{
        projectsHeadH1.classList.toggle('show', entry.isIntersecting)
    });
}
const observerProjectsHead = new IntersectionObserver(toggleProjectsH1, options)
observerProjectsHead.observe(projectsHead)

// ======================================================================================
// For the First project Title
const projectsItemHeadOne = document.getElementById('projects-item-head-1');
const projectsItemHeadH2First = document.querySelector('.projects-item-head-h2-first');
function toggleProjectsItemH1One(entries){
    entries.forEach(entry =>{
        projectsItemHeadH2First.classList.toggle('show', entry.isIntersecting)
    });
}
const observerProjectsItemHeadOne = new IntersectionObserver(toggleProjectsItemH1One, options)
observerProjectsItemHeadOne.observe(projectsItemHeadOne)

// For the First project Text and Images
const projectsItemContentsWriteOne = document.getElementById('projects-item-contents-write-1');
const projectsItemContentsWriteOneH3 = document.querySelector('.projects-item-contents-write-1');
const projectsItemContentsWriteOneP = document.querySelector('.projects-item-contents-write-1');
const project1Img1Right = document.querySelector('.project-1-img-1-right');
function toggleProjectsWriteOne(entries){
    entries.forEach(entry =>{
        projectsItemContentsWriteOneH3.classList.toggle('show', entry.isIntersecting);
        projectsItemContentsWriteOneP.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsItemContentsWriteOne = new IntersectionObserver(toggleProjectsWriteOne, options);
observerProjectsItemContentsWriteOne.observe(projectsItemContentsWriteOne);
observerProjectsItemContentsWriteOne.observe(projectsItemContentsWriteOneH3); //This was not here.


const project1Img1Left = document.querySelector('.project-1-img-1-left');


const projectsItemContentsImgOne = document.querySelector('.projects-item-contents-img-1');
function toggleProjectsImgOneLeft(entries){
    entries.forEach(entry =>{
        project1Img1Left.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsImgOneLeft = new IntersectionObserver(toggleProjectsImgOneLeft, options);
observerProjectsImgOneLeft.observe(projectsItemContentsImgOne);

function toggleProjectsImgOneRight(entries){
    entries.forEach(entry =>{
        project1Img1Right.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsImgOneRight = new IntersectionObserver(toggleProjectsImgOneRight, options);
observerProjectsImgOneRight.observe(projectsItemContentsImgOne);


// ================================================================================================
// For the Second project Title 
const projectsItemHeadTwo = document.getElementById('projects-item-head-2');
const projectsItemHeadH2Right = document.querySelector('.projects-item-head-h2-right');
function toggleProjectsItemH1Right(entries){
    entries.forEach(entry =>{
        projectsItemHeadH2Right.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsItemHeadTwo = new IntersectionObserver(toggleProjectsItemH1Right, options);
observerProjectsItemHeadTwo.observe(projectsItemHeadTwo);

// For the Second project Text and Image
const projectsItemContentsWriteTwo = document.getElementById('projects-item-contents-write-2');
const projectsItemContentsWriteRightH2 = document.querySelector('.projects-item-contents-write-right');
// const projectsItemContentsWriteTwoP = document.querySelector('.projects-item-contents-write-2');
// const projectTwoImgTwo = document.querySelector('.project-2-img-2');
function toggleProjectsWriteTwo(entries){
    entries.forEach(entry =>{
        projectsItemContentsWriteRightH2.classList.toggle('show', entry.isIntersecting);
        // projectsItemContentsWriteTwoP.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsItemContentsWriteTwo = new IntersectionObserver(toggleProjectsWriteTwo, options);
observerProjectsItemContentsWriteTwo.observe(projectsItemContentsWriteTwo);



const project2Img2Right = document.querySelector('.project-2-img-2-right');

const projectsItemContentsImgRight = document.querySelector('.projects-item-contents-img-right');
function toggleProjectsImgTwoRight(entries){
    entries.forEach(entry =>{
        project2Img2Right.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsImgTwoRight = new IntersectionObserver(toggleProjectsImgTwoRight, options);
observerProjectsImgTwoRight.observe(projectsItemContentsImgRight);
observerProjectsImgTwoRight.observe(project2Img2Right);


const project2Img2Left = document.querySelector('.project-2-img-2-left');
function toggleProjectsImgTwoLeft(entries){
    entries.forEach(entry =>{
        project2Img2Left.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsImgTwoLeft = new IntersectionObserver(toggleProjectsImgTwoLeft, options);
observerProjectsImgTwoLeft.observe(projectsItemContentsImgRight);
observerProjectsImgTwoLeft.observe(project2Img2Left);



// =========================================================================================
// For the Third project Title
const projectsItemHeadThree = document.getElementById('projects-item-head-3');
const projectsItemHeadH2Third = document.querySelector('.projects-item-head-h2-third');
function toggleProjectsItemH1Three(entries){
    entries.forEach(entry =>{
        projectsItemHeadH2Third.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsItemHeadThree = new IntersectionObserver(toggleProjectsItemH1Three, options);
observerProjectsItemHeadThree.observe(projectsItemHeadThree);

// For the Third project Text and Image
const projectsItemContentsWriteThree = document.getElementById('projects-item-contents-write-3');
const projectsItemContentsWriteThreeH2 = document.querySelector('.projects-item-contents-write-3');
const projectsItemContentsWriteThreeP = document.querySelector('.projects-item-contents-write-3');
const project3Img3Right = document.querySelector('.project-3-img-3-right');
function toggleProjectsWriteThree(entries){
    entries.forEach(entry =>{
        projectsItemContentsWriteThreeH2.classList.toggle('show', entry.isIntersecting);
        projectsItemContentsWriteThreeP.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsItemContentsWriteThree = new IntersectionObserver(toggleProjectsWriteThree, options)
observerProjectsItemContentsWriteThree.observe(projectsItemContentsWriteThree)


const project3Img3Left = document.querySelector('.project-3-img-3-left');


const projectsItemContentsImgThree = document.querySelector('.projects-item-contents-img-3');
function toggleProjectsImgThreeLeft(entries){
    entries.forEach(entry =>{
        project3Img3Left.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsImgThreeLeft = new IntersectionObserver(toggleProjectsImgThreeLeft, options);
observerProjectsImgThreeLeft.observe(projectsItemContentsImgThree);

function toggleProjectsImgThreeRight(entries){
    entries.forEach(entry =>{
        project3Img3Right.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsImgThreeRight = new IntersectionObserver(toggleProjectsImgThreeRight, options);
observerProjectsImgThreeRight.observe(projectsItemContentsImgThree);


// For the About Me Head Title
const aboutMeHead = document.querySelector('.about-me__head');
const aboutMeHeadH1 = document.querySelector('.about-me__head-h1');

function toggleAboutMeH1(entries){
    entries.forEach(entry =>{
        aboutMeHeadH1.classList.toggle('show', entry.isIntersecting);
    });
}
const observerAboutMeHead = new IntersectionObserver(toggleAboutMeH1, options);
observerAboutMeHead.observe(aboutMeHeadH1);


const aboutMeH2Outer = document.querySelector('.about-me-h2__outer');
function toggleAboutMeH2Outer(entries){
    entries.forEach(entry =>{
        aboutMeH2Outer.classList.toggle('show', entry.isIntersecting);
    });
}
const observerAboutMeH2Outer = new IntersectionObserver(toggleAboutMeH2Outer, options);
observerAboutMeH2Outer.observe(aboutMeH2Outer);


// For the About Me Paragraphs

const buttons = document.querySelectorAll('.about-me-button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const clickedButton = event.target;
            buttons.forEach(button => {
                button.classList.remove('active');
                clickedButton.classList.add('active');
            });
        clickedButton.classList.add('active');
    });
});

const right = document.querySelector('.right');
function toggleRight(entries){
    entries.forEach(entry =>{
        right.classList.toggle('show', entry.isIntersecting);
    })
}
const observerRight = new IntersectionObserver(toggleRight, optionsTwo);
observerRight.observe(right);

const left = document.querySelector('.left');
function toggleLeft(entries){
    entries.forEach(entry =>{
        left.classList.toggle('show', entry.isIntersecting);
    })
}
const observerLeft = new IntersectionObserver(toggleLeft, options);
observerLeft.observe(left);



const contactMeHead = document.querySelector('.contact-me__head');
function toggleContactMeHead(entries){
    entries.forEach(entry =>{
        contactMeHead.classList.toggle('show', entry.isIntersecting);
    })
}
const observerContactMeHead = new IntersectionObserver(toggleContactMeHead, options);
observerContactMeHead.observe(contactMeHead);


const contactMeContent = document.querySelector('.contact-me__content');
function toggleContactMeContent(entries){
    entries.forEach(entry =>{
        contactMeContent.classList.toggle('show', entry.isIntersecting);
    })
}
const observerContactMeContent = new IntersectionObserver(toggleContactMeContent, options);
observerContactMeContent.observe(contactMeContent);
