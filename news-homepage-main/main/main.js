function toggleMenu() {
    const nav = document.querySelector('.header__nav');
    const menuIcon = document.getElementById('menu-icon');
    const exitMenuIcon = document.getElementById('exit-menu-icon');
    const navList = document.querySelector('.header__nav .nav');


    if (nav.classList.contains('header__nav--visible')) {
        
        nav.classList.remove('header__nav--visible');
        menuIcon.style.display = 'block';
        exitMenuIcon.style.display = 'none';
        navList.classList.remove('flex-column');

        
        
    } else {
        nav.classList.add('header__nav--visible');
        menuIcon.style.display = 'none';
        exitMenuIcon.style.display = 'block';
        navList.classList.add('flex-column');

        
    }
}