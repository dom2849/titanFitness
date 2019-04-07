const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNavigationMenu = document.querySelector('.main-navigation');

loadEventListeners();

function loadEventListeners(){
    hamburgerMenu.addEventListener('click', showOrHideHamburgerMenu);
    window.addEventListener("resize", cleanUpMainNavigationClassList);
}

function showOrHideHamburgerMenu() {

    if (mainNavigationMenu.classList.contains('enable')) {
        mainNavigationMenu.classList.remove('enable');
        mainNavigationMenu.classList.add('disable');
    }
    else {
        mainNavigationMenu.classList.remove('disable');
        mainNavigationMenu.classList.add('enable');
    }

}

function cleanUpMainNavigationClassList() {
    var width = document.documentElement.clientWidth;
    if (width > 768) {
        mainNavigationMenu.classList.remove('enable');
        mainNavigationMenu.classList.remove('disable');
    }
}
