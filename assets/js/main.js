const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.has-menu > button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const parent = event.currentTarget.parentElement;
    const isMobile = window.matchMedia('(max-width: 1080px)').matches;

    if (isMobile && parent) {
      parent.classList.toggle('open');
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.has-menu')) {
    document.querySelectorAll('.has-menu.open').forEach((item) => {
      if (!window.matchMedia('(max-width: 1080px)').matches) item.classList.remove('open');
    });
  }
});
