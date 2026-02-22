document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.querySelector(".LIGHT-NIGHT");
  const body = document.body;
  const icon = document.getElementById("theme-icon");
  
  const headerLogo = document.getElementById("header-logo");
  const footerLogo = document.getElementById("footer-logo");

  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (icon) icon.src = "img/LIGHT.png";
    if (headerLogo) headerLogo.src = "img/LOGO.png";
    if (footerLogo) footerLogo.src = "img/LOGO.png";
  } else {
    body.classList.remove("dark-mode");
    if (icon) icon.src = "img/NIGHT.png";
    if (headerLogo) headerLogo.src = "img/BLACK-LOGO.png";
    if (footerLogo) footerLogo.src = "img/BLACK-LOGO.png";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      body.classList.toggle("dark-mode");

      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        if (icon) icon.src = "img/LIGHT.png";
        if (headerLogo) headerLogo.src = "img/LOGO.png";
        if (footerLogo) footerLogo.src = "img/LOGO.png";
      } else {
        localStorage.setItem("theme", "light");
        if (icon) icon.src = "img/NIGHT.png";
        if (headerLogo) headerLogo.src = "img/BLACK-LOGO.png";
        if (footerLogo) footerLogo.src = "img/BLACK-LOGO.png";
      }
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".projects-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {

      const filter = this.getAttribute("data-filter");

      filterButtons.forEach(btn => btn.classList.remove("active"));

      this.classList.add("active");

      projectCards.forEach(card => {

        const categories = card.getAttribute("data-category").split(" ");

        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }

      });

    });
  });

  projectCards.forEach(card => {
  card.querySelectorAll('.tech-tags span').forEach((tag, index) => {
    tag.classList.add("tech-animate");
    tag.style.animationDelay = `${index * 0.1}s`;
  });
  });

  const roles = [
    "a Front-End Web Developer",
    "a UI/UX Designer"
  ];

  const changingText = document.getElementById("changing-text");

  if (changingText) {
    let index = 0;

    setInterval(() => {
      changingText.classList.add("fade-out");

      setTimeout(() => {
        index = (index + 1) % roles.length;
        changingText.innerHTML = roles[index];

        changingText.classList.remove("fade-out");
        changingText.classList.add("fade-in");

        setTimeout(() => {
          changingText.classList.remove("fade-in");
        }, 400);

      }, 400);

    }, 3000);
  }

const transition = document.querySelector(".page-transition");

if (transition) {
  setTimeout(() => {
    transition.classList.add("slide-out");
  }, 100);
}

document.querySelectorAll("a[href]").forEach(link => {
  link.addEventListener("click", function (e) {

    const target = this.getAttribute("href");

    if (
      target.startsWith("#") ||
      target.startsWith("http") ||
      this.hasAttribute("download") ||
      this.target === "_blank"
    ) return;

    e.preventDefault();

    transition.classList.remove("slide-out");
    transition.classList.add("active");

    setTimeout(() => {
      window.location.href = target;
    }, 600);
  });
});

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".NAVIGATIONS");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

});
