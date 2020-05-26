
// Nice Animation When Click On Project

const PROJECT = Array.from(document.querySelectorAll('.project'));

function toggleProj_Info() {

    this.classList.toggle('inactive');

}

PROJECT.forEach( (ele) => {
    ele.addEventListener('click', toggleProj_Info);
} );

// Hide and Show The Menu Items When Click on Bars Button

const MENUBUTTON = document.querySelector('.menu');
const NAVMENU = document.querySelector('header nav');
const MENUITEMS = document.querySelectorAll('header nav a');

MENUBUTTON.addEventListener('click', () => {
    NAVMENU.classList.toggle('display-flex');
    window.setTimeout( () => {
        MENUITEMS.forEach( (item) => {
            item.classList.toggle('open');
        } )
    }, 100 );
});



// Smooth Scroll When Click On Items of Menu

MENUITEMS.forEach( (item) => {
    item.addEventListener('click', (e) => {

        e.preventDefault();

        let targetArr = item.getAttribute('href').split('');
        targetArr.shift();
        targetStr = targetArr.join('');
        
        const TARGET = document.getElementById(targetStr);
        
        window.scrollTo({ 
            top: TARGET.offsetTop,
            left: 0,
            behavior: 'smooth' 
          });
        
    });
});