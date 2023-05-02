const navMenu = document.getElementById('nav-menu');
const openNavMenuButton = document.getElementById('open-nav-menu');
const closeNavMenuButton = document.getElementById('close-nav-menu');

const screenOverlay = document.getElementById('screen-overlay');

const offscreenNavbar = 'right-[-15rem]';
const onscreenNavbar = 'right-0';
const noDisplay = 'hidden';

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    hideNavbar();
  }
});

function hideNavbar() {
  if (navMenu.classList.contains(onscreenNavbar)) {
    navMenu.classList.remove(onscreenNavbar);
    navMenu.classList.add(offscreenNavbar);

    screenOverlay.classList.add(noDisplay);
  }
}

openNavMenuButton.addEventListener('click', () => {
  navMenu.classList.remove(offscreenNavbar);
  navMenu.classList.add(onscreenNavbar);

  screenOverlay.classList.remove(noDisplay);
});

closeNavMenuButton.addEventListener('click', hideNavbar);


