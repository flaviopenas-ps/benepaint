//const headerTop = document.getElementById('headerTop');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const headerLinks = navMenu.querySelectorAll('a');
const sections = [...document.querySelectorAll('section')];


// Toggle menu visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

// Hide menu when any nav link is clicked
headerLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});