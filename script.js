// Wait until the HTML has loaded before JavaScript looks for page elements.
document.addEventListener("DOMContentLoaded", function () {

  // ==================== MOBILE NAVIGATION ====================
  // Finds the mobile menu button and the navigation links.
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Only add the click action if both elements exist in the HTML.
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");

      // Update the button icon and accessibility information.
      const menuIsOpen = navLinks.classList.contains("show");
      menuToggle.setAttribute("aria-expanded", menuIsOpen);
      menuToggle.textContent = menuIsOpen ? "×" : "☰";
    });

    // Close the mobile menu after a navigation link is selected.
    const navigationItems = document.querySelectorAll(".nav-links a");
    navigationItems.forEach(function (item) {
      item.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // ==================== LIGHT / DARK THEME ====================
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      // Show the sun in dark mode and the moon in light mode.
      if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀";
      } else {
        themeToggle.textContent = "☾";
      }
    });
  }

  // ==================== CONTACT FORM VALIDATION ====================
  // This demo checks the form fields. It does NOT send an actual email.
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
      // Prevent the page from refreshing when the form is submitted.
      event.preventDefault();

      const nameField = document.getElementById("visitorName");
      const emailField = document.getElementById("visitorEmail");
      const messageField = document.getElementById("visitorMessage");

      // Check that all three input fields are present in the HTML.
      if (!nameField || !emailField || !messageField) {
        formMessage.textContent = "The form fields could not be found. Please check the HTML IDs.";
        return;
      }

      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const message = messageField.value.trim();

      if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please complete all three fields.";
      } else {
        formMessage.textContent = "Thanks, " + name + "! The demo form is working.";
        contactForm.reset();
      }
    });
  }

  // ==================== AUTOMATIC FOOTER YEAR ====================
  // Updates the year automatically.
  const currentYear = document.getElementById("currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

});
