const navMenu = document.getElementById('nav-menu');
const openNavMenuButton = document.getElementById('open-nav-menu');
const closeNavMenuButton = document.getElementById('close-nav-menu');

const screenOverlay = document.getElementById('screen-overlay');

const featuresMenu = document.getElementById('features-menu');
const toggleFeaturesMenuIcons = document.querySelectorAll('#toggle-features-menu > svg > path');
const toggleFeaturesMenu = document.getElementById('toggle-features-menu');

const companyMenu = document.getElementById('company-menu');
const toggleCompanyMenuIcons = document.querySelectorAll('#toggle-company-menu > svg > path');
const toggleCompanyMenu = document.getElementById('toggle-company-menu');

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

toggleFeaturesMenu.addEventListener('click', makeDisplayToggler(featuresMenu, toggleFeaturesMenuIcons));
toggleCompanyMenu.addEventListener('click', makeDisplayToggler(companyMenu, toggleCompanyMenuIcons));

function makeDisplayToggler(targetElement, togglerIconElements) {
  return () => {
    const DOWN_ARROW = 0;
    const UP_ARROW = 1;

    togglerIconElements[DOWN_ARROW].classList.toggle(noDisplay);
    togglerIconElements[UP_ARROW].classList.toggle(noDisplay);

    targetElement.classList.toggle(noDisplay);
  };
}
