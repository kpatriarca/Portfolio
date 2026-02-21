document.addEventListener("DOMContentLoaded", function () {

  // ===== DARK / LIGHT MODE TOGGLE =====
  const toggleBtn = document.querySelector(".LIGHT-NIGHT");
  const body = document.body;
  const icon = document.getElementById("theme-icon");
  
  const headerLogo = document.getElementById("header-logo");
  const footerLogo = document.getElementById("footer-logo");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (icon) icon.src = "img/LIGHT.png";
    if (headerLogo) headerLogo.src = "img/BLACK-LOGO.png";
    if (footerLogo) footerLogo.src = "img/BLACK-LOGO.png";
  }

  // Toggle dark/light mode
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        if (icon) icon.src = "img/LIGHT.png";               // Sun icon
        if (headerLogo) headerLogo.src = "img/BLACK-LOGO.png";
        if (footerLogo) footerLogo.src = "img/BLACK-LOGO.png";
      } else {
        localStorage.setItem("theme", "light");
        if (icon) icon.src = "img/NIGHT.png";               // Moon icon
        if (headerLogo) headerLogo.src = "img/LOGO.png";    // Original logo
        if (footerLogo) footerLogo.src = "img/LOGO.png";    // Original logo
      }
    });
  }

  // ===== PROJECT FILTER WITH FADE ANIMATION =====
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".projects-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {

      const filter = this.getAttribute("data-filter");

      // Remove active from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));

      // Add active to clicked button
      this.classList.add("active");

      // Loop through project cards
      projectCards.forEach(card => {

        const categories = card.getAttribute("data-category").split(" ");

        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "flex";  // keep layout
        } else {
          card.style.display = "none";
        }

      });

    });
  });

  card.querySelectorAll('.tech-tags span').forEach((tag, index) => {
    tag.style.opacity = 0;
    tag.style.transform = 'translateY(10px)';
    tag.style.animation = `techFadeUp 0.5s forwards`;
    tag.style.animationDelay = `${index * 0.1}s`;
  });


});
