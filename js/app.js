/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navSections = document.querySelectorAll('section');
const numberOfSections = navSections.length;
const navBar = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function activateSection(section){
    const newActiveSection = document.getElementById(section.id);

    if (!(newActiveSection.classList.contains('your-active-class'))){ //test if that section changed during scrolling 
        const newActiveListElement = document.querySelector(`.${section.id}`);
        const oldActiveSection = document.querySelector('.your-active-class');
        const oldActiveListElement = document.querySelector('.selected');
        oldActiveListElement.classList.remove('selected'); //removing the selected class from previce selected li and add it to the new one
        newActiveListElement.classList.add('selected')
        oldActiveSection.classList.remove('your-active-class');
        newActiveSection.classList.add('your-active-class');


;
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const liItems = document.createDocumentFragment();
for(const section of navSections){
    const newListElement = document.createElement("li");
    newListElement.textContent = section.getAttribute('data-nav');
    newListElement.className = `${section.id} menu__link`;
    newListElement.addEventListener('click',function(){ //add click event to each of the list nodes 
        activateSection(section);
        document.getElementById(section.id).scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    liItems.appendChild(newListElement);
}
navBar.appendChild(liItems);
navBar.firstElementChild.classList.add('selected'); //first li node selected by defulat


// Set sections as active
window.addEventListener('scroll',function(){
        for(const section of navSections){
            if( section.getBoundingClientRect().top < 800){
                activateSection(section);
            }
        }
});

