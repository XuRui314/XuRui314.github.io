// Close the mobile menu before following a link to a section on this page.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('#navbarNav a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      const toggle = document.querySelector('.navbar-toggler[aria-controls="navbarNav"]');
      if (toggle && toggle.getAttribute("aria-expanded") === "true") {
        toggle.click();
      }
    });
  });
});
