/**
 * Define Global Variables
 * 
*/
const navlist=document.getElementById('navbar__list');

// build the nav bar dynamically

const navBar=[
    {label:'Home', url:'#home'},
    {label:'About',url: '#about' },
    {label:'Services',url: '#services' },
    {label:'Contact' , url:'#contact'}
];
 
navBar.forEach(item => {
    const list=document.createElement('li');
    const link=document.createElement('a');
    link.href=item.url;
    link.textContent=item.label;

    list.appendChild(link);
    navlist.appendChild(list);
});

// Add class 'active' to section when near top of viewport
// This will highlight which section is being viewed
// Used the suggestion from Udacity Project Rubric

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');//Selects all sections 
    const navLink = document.querySelectorAll('nav a');//selects all 'a' link present inside nav
  
    function makeSectionActive() {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();//To detect the element location relative to the viewport 
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
        if (isInViewport){
          const targetId = '#' + section.getAttribute('id');//If the section is in viewport the section Id gets appended to # to form the targetId
          navLink.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
              link.classList.add('active');//Setting the section active
            }
          });
        }
      });
    }
  
    window.addEventListener('scroll', makeSectionActive);
  });
  


// Scroll to anchor 
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();//To prevent the default behavior of the nav
      const section = link.getAttribute('href');//To get the id of the section
      const mainSection = document.querySelector(section);//To get the main section
      mainSection.scrollIntoView({ behavior: 'smooth' });//Scrolling feature so that it scrolls to the section selected
    });
  });

