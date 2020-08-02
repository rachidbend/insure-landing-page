import "./../sass/main.scss";


// // document.querySelector('.nav__mobile--open').classList.add('display');
// document.querySelector('.nav__mobile').addEventListener('click', e => {

//     // if there is a mobile class remove it 
//     // if there is no mobile class add it
//     const button = document.querySelector('.nav__mobile');
//     const nav = document.querySelector('.nav-mobile');
//     nav.classList.toggle('mobile-open');

//     if (nav.classList.contains('mobile-open')) {

//         document.querySelector('.nav__mobile--open').classList.remove('display');
//         document.querySelector('.nav__mobile--close').classList.add('display');
//     } 
//     else if (!nav.classList.contains('mobile-open')) {

//         // button.innerHTML = '<img class="nav__mobile--open" src="images/icon-hamburger.svg" alt=""></img>';
//         document.querySelector('.nav__mobile--close').classList.remove('display');
//         document.querySelector('.nav__mobile--open').classList.add('display');

//     } 
//     else {
//         console.log('there is an error');

//     }


// })
// handle the nav toggle
const navigationBodyToggle = showOrHide => {
    const navBody = document.querySelector('.nav-mobile').classList;
    if (showOrHide === 'show') {
        navBody.add('mobile-open');
    }
    else if (showOrHide === 'hide') {
        navBody.remove('mobile-open');
    }
}
// handle the nav button toggle
const navigationButtonToggle = openOrClose => {
    // if the navbody is shown change the navbuttonn to close
    if (openOrClose === 'open') {
        document.querySelector('.nav__mobile--open').classList.remove('display');
        document.querySelector('.nav__mobile--close').classList.add('display');
    }
    // if the navbody is hidden change the navbuttonn to open
    else if (openOrClose === 'close') {
        document.querySelector('.nav__mobile--close').classList.remove('display');
        document.querySelector('.nav__mobile--open').classList.add('display');
    }
}

// this is what determins what happens depending on the event target class
// meaning wich icon is shown
const navToggle = event => {
    // if the class is this then show the nav and change the icon to be able to close later
    if (event.target.classList.contains('nav__mobile--open')) {
        navigationBodyToggle('show');
        navigationButtonToggle('open');
    }  
    // if the class is this then hide the nav and change the icon to be able to open later
    else if (event.target.classList.contains('nav__mobile--close')) {
        navigationBodyToggle('hide');
        navigationButtonToggle('close');
    }
}

// this is what gets the event listener and calls the right funnction
const mobileNav = () => {
    document.querySelector('.nav__mobile').addEventListener('click', navToggle);
}
mobileNav();












