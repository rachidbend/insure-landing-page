import "./../sass/main.scss";


// document.querySelector('.nav__mobile--open').classList.add('display');
document.querySelector('.nav__mobile').addEventListener('click', e => {

    // if there is a mobile class remove it 
    // if there is no mobile class add it
    const button = document.querySelector('.nav__mobile');
    const nav = document.querySelector('.nav-mobile');
    nav.classList.toggle('mobile-open');

    if (nav.classList.contains('mobile-open')) {

        document.querySelector('.nav__mobile--open').classList.remove('display');
        document.querySelector('.nav__mobile--close').classList.add('display');
    } 
    else if (!nav.classList.contains('mobile-open')) {

        // button.innerHTML = '<img class="nav__mobile--open" src="images/icon-hamburger.svg" alt=""></img>';
        document.querySelector('.nav__mobile--close').classList.remove('display');
        document.querySelector('.nav__mobile--open').classList.add('display');

    } 
    else {
        console.log('there is an error');

    }


})


















