function toggleMenu() {
    const nav = document.querySelector('.header__nav');
    const menuIcon = document.getElementById('menu-icon');
    const exitMenuIcon = document.getElementById('exit-menu-icon');
    const navList = document.querySelector('.header__nav .nav');
    const sidePanel = document.getElementById('sidePanel');


    if (nav.classList.contains('header__nav--visible')) {
        /*sidePanel.style.display = 'none'; */ // Hide the side panel
        
        nav.classList.remove('header__nav--visible');
        menuIcon.style.display = 'block';
        exitMenuIcon.style.display = 'none';
        navList.classList.remove('flex-column');

        /* sidePanel.classList.remove('side-panel--visible');*/ // Hide the side panel
        
    } else {
        /* sidePanel.style.display = 'block'; */ // display the side panel
        nav.classList.add('header__nav--visible');
        menuIcon.style.display = 'none';
        exitMenuIcon.style.display = 'block';
        navList.classList.add('flex-column');

        /*sidePanel.classList.add('side-panel--visible');*/ // Show the side panel
    }
}