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

  // Thêm sự kiện để đóng menu khi nhấn bên ngoài menu
  document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !mobileMenuIcon.contains(event.target)) {
      mobileMenu.classList.remove('show');
    }
  });
});
