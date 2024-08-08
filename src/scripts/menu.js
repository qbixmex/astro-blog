const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  navLinks.classList.toggle('expanded');
}
