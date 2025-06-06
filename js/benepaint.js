//const headerTop = document.getElementById('headerTop');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const headerLinks = navMenu.querySelectorAll('a');
const sections = [...document.querySelectorAll('section')];

function onScroll() {
  const scrollPos = window.scrollY;

  sections.forEach(section => {
    const top = section.offsetTop - 350;
    const bottom = top + 700;
    const content = section.querySelector('.service-content');

    if (scrollPos >= top && scrollPos < bottom) {
      const id = section.getAttribute('id');

      headerLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });

      section.classList.add('active');
      content?.classList.add('active');
    } else {
      section.classList.remove('active');
      content?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollX < 0) {
    window.scrollTo(0, window.scrollY);
  }
});

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(async (entry) => {
//     const section = entry.target;
//     const content = section.querySelector('.service-content');

//     if (entry.isIntersecting) {
//       section.classList.add('active');
//       await sleep(300);
//       content?.classList.add('active');
//     } else {
//       content?.classList.remove('active');
//       section.classList.remove('active');
//     }
//   });
// }, {
//   threshold: 0.5,
//   rootMargin: '-10% 0px -10% 0px' // Adjusts the "activation zone" vertically
// });

// const serviceSections = document.querySelectorAll('.service-section');
// serviceSections.forEach(section => observer.observe(section));