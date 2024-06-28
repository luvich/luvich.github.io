document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMobileMenu = document.querySelector('.close-mobile-menu');

  mobileMenuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
  });

  closeMobileMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('show');
  });
});
