document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon span");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMobileMenuButton = document.querySelector(".close-mobile-menu");

  mobileMenuIcon.addEventListener("click", function() {
    mobileMenu.style.display = "block";
  });

  closeMobileMenuButton.addEventListener("click", function() {
    mobileMenu.style.display = "none";
  });
});
