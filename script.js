// Display current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scrolling for internal links
document.querySelectorAll('a.nav-link, a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const yOffset = -70; // offset for navbar
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });

        // Close mobile menu after click
        const menuToggle = document.getElementById("menu-toggle");
        if (menuToggle && menuToggle.checked) menuToggle.checked = false;
      }
    }
  });
});

// Basic client-side form validation
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // Show success message (demo only)
    const status = document.getElementById("form-status");
    status.classList.remove("d-none");
    setTimeout(() => {
      form.reset();
      form.classList.remove("was-validated");
      status.classList.add("d-none");
    }, 1800);
  });
}
