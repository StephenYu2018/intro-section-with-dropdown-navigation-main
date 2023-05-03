const navMenu = document.getElementById('nav-menu');
const openNavMenuButton = document.getElementById('open-nav-menu');
const closeNavMenuButton = document.getElementById('close-nav-menu');

const screenOverlay = document.getElementById('screen-overlay');

const featuresMenu = document.getElementById('features-menu');
const toggleFeaturesMenuIcon = document.querySelector('#toggle-features-menu > img');
const toggleFeaturesMenu = document.getElementById('toggle-features-menu');

const companyMenu = document.getElementById('company-menu');
const toggleCompanyMenuIcon = document.querySelector('#toggle-company-menu > img');
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

toggleFeaturesMenu.addEventListener('click', makeDisplayToggler(featuresMenu, toggleFeaturesMenuIcon));
toggleCompanyMenu.addEventListener('click', makeDisplayToggler(companyMenu, toggleCompanyMenuIcon));

function makeDisplayToggler(targetElement, togglerIconElement) {
  return () => {
    if (togglerIconElement.getAttribute('src') === './images/icon-arrow-down.svg') {
      togglerIconElement.setAttribute('src', './images/icon-arrow-up.svg');
    } else {
      togglerIconElement.setAttribute('src', './images/icon-arrow-down.svg');
    }

    targetElement.classList.toggle(noDisplay);
  };
}
