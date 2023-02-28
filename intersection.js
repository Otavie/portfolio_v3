// For the Project Head Title
const projectsHead = document.querySelector('.projects-head');
const projectsHeadH1 = document.querySelector('.projects-head-h1');
options = {
    threshold: 0.5,
    // rootMargin: '50px',
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
// const projectsItemContentsWriteOneH2 = document.querySelector('.projects-item-contents-write-1');
const projectsItemContentsWriteOneH3 = document.querySelector('.projects-item-contents-write-1');
const projectsItemContentsWriteOneP = document.querySelector('.projects-item-contents-write-1');
function toggleProjectsWriteOne(entries){
    entries.forEach(entry =>{
        // projectsItemContentsWriteOneH2.classList.toggle('show', entry.isIntersecting);
        projectsItemContentsWriteOneH3.classList.toggle('show', entry.isIntersecting);
        projectsItemContentsWriteOneP.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsItemContentsWriteOne = new IntersectionObserver(toggleProjectsWriteOne, options);
observerProjectsItemContentsWriteOne.observe(projectsItemContentsWriteOne);
observerProjectsItemContentsWriteOne.observe(projectsItemContentsWriteOneH3); //This was not here.


const projectsItemContentsImgOne = document.querySelector('.projects-item-contents-img-1');
// const project1Img1Left = document.querySelector('.project-1-img-1-left');
function toggleProjectsImgOneLeft(entries){
    entries.forEach(entry =>{
        project1Img1Left.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsImgOneLeft = new IntersectionObserver(toggleProjectsImgOneLeft, options);
observerProjectsImgOneLeft.observe(projectsItemContentsImgOne);

// const project1Img1Right = document.querySelector('.project-1-img-1-right');
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

// For the Second project Text
const projectsItemContentsWriteTwo = document.getElementById('projects-item-contents-write-2');
const projectsItemContentsWriteRightH2 = document.querySelector('.projects-item-contents-write-right');
const projectsItemContentsWriteTwoP = document.querySelector('.projects-item-contents-write-2');
const projectTwoImgTwo = document.querySelector('.project-2-img-2');
function toggleProjectsWriteTwo(entries){
    entries.forEach(entry =>{
        projectsItemContentsWriteRightH2.classList.toggle('show', entry.isIntersecting);
        // projectsItemContentsWriteTwoP.classList.toggle('show', entry.isIntersecting);
        projectTwoImgTwo.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsItemContentsWriteTwo = new IntersectionObserver(toggleProjectsWriteTwo, options);
observerProjectsItemContentsWriteTwo.observe(projectsItemContentsWriteTwo);

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
function toggleProjectsWriteThree(entries){
    entries.forEach(entry =>{
        projectsItemContentsWriteThreeH2.classList.toggle('show', entry.isIntersecting);
        projectsItemContentsWriteThreeP.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsItemContentsWriteThree = new IntersectionObserver(toggleProjectsWriteThree, options)
observerProjectsItemContentsWriteThree.observe(projectsItemContentsWriteThree)


const projectsItemContentsImgThree = document.querySelector('.projects-item-contents-img-3');
function toggleProjectsImgThreeLeft(entries){
    entries.forEach(entry =>{
        // projectThreeImgThree.classList.toggle('show', entry.isIntersecting);
        project3Img3Left.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsImgThreeLeft = new IntersectionObserver(toggleProjectsImgThreeLeft, options);
observerProjectsImgThreeLeft.observe(projectsItemContentsImgThree);

function toggleProjectsImgThreeRight(entries){
    entries.forEach(entry =>{
        // projectThreeImgThree.classList.toggle('show', entry.isIntersecting);
        project3Img3Right.classList.toggle('show', entry.isIntersecting);
    });
}
const observerProjectsImgThreeRight = new IntersectionObserver(toggleProjectsImgThreeRight, options);
observerProjectsImgThreeRight.observe(projectsItemContentsImgThree);






// const projectsItemContentsImgOne = document.querySelector('.projects-item-contents-img-1');
// // const project1Img1Left = document.querySelector('.project-1-img-1-left');
// function toggleProjectsImgOneLeft(entries){
//     entries.forEach(entry =>{
//         project1Img1Left.classList.toggle('show', entry.isIntersecting);
//     });
// }
// const observerProjectsImgOneLeft = new IntersectionObserver(toggleProjectsImgOneLeft, options);
// observerProjectsImgOneLeft.observe(projectsItemContentsImgOne);

// // const project1Img1Right = document.querySelector('.project-1-img-1-right');
// function toggleProjectsImgOneRight(entries){
//     entries.forEach(entry =>{
//         project1Img1Right.classList.toggle('show', entry.isIntersecting);
//     });
// }
// const observerProjectsImgOneRight = new IntersectionObserver(toggleProjectsImgOneRight, options);
// observerProjectsImgOneRight.observe(projectsItemContentsImgOne);






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


// For the About Me H2 Emoji and Skill Sub-header Title
// optionsOtavie = {
//     threshold: 0.75,
// }
const aboutMeH2Outer = document.querySelector('.about-me-h2__outer');
function toggleAboutMeH2Outer(entries){
    entries.forEach(entry =>{
        aboutMeH2Outer.classList.toggle('show', entry.isIntersecting);
    });
}
const observerAboutMeH2Outer = new IntersectionObserver(toggleAboutMeH2Outer, options);
observerAboutMeH2Outer.observe(aboutMeH2Outer);


// For the About Me Paragraphs
const aboutMeOne = document.querySelector('.first-letter-large');
function toggleParagraphOne(entries){
    entries.forEach(entry =>{
        aboutMeOne.classList.toggle('show', entry.isIntersecting);
    })
}
const observerParagraphOne = new IntersectionObserver(toggleParagraphOne, options);
observerParagraphOne.observe(aboutMeOne);

const aboutMeTwo = document.querySelector('.about-me-2');
function toggleParagraphTwo(entries){
    entries.forEach(entry =>{
        aboutMeTwo.classList.toggle('show', entry.isIntersecting);
    })
}
const observerParagraphTwo = new IntersectionObserver(toggleParagraphTwo, options);
observerParagraphTwo.observe(aboutMeTwo);

const aboutMeThree = document.querySelector('.about-me-3');
function toggleParagraphThree(entries){
    entries.forEach(entry =>{
        aboutMeThree.classList.toggle('show', entry.isIntersecting);
    })
}
const observerParagraphThree = new IntersectionObserver(toggleParagraphThree, options);
observerParagraphThree.observe(aboutMeThree);

const aboutMeFour = document.querySelector('.about-me-4');
function toggleParagraphFour(entries){
    entries.forEach(entry =>{
        aboutMeFour.classList.toggle('show', entry.isIntersecting);
    })
}
const observerParagraphFour = new IntersectionObserver(toggleParagraphFour, options);
observerParagraphFour.observe(aboutMeFour);

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
