let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
    let mainNavigationMenu = document.querySelector('.main-navigation');

    if (mainNavigationMenu.classList.contains('enable')){
        mainNavigationMenu.classList.remove('enable');
        mainNavigationMenu.classList.add('disable');
    }
    else{
        mainNavigationMenu.classList.remove('disable');
        mainNavigationMenu.classList.add('enable');
    }
    
})
