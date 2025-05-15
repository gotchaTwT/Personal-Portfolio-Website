document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Greeting based on time of day
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    const now = new Date();
    const hour = now.getHours();

    let greetingText = "Hello! Welcome.";
    if (hour >= 5 && hour < 12) {
      greetingText = "Good Morning!";
    } else if (hour >= 12 && hour < 17) {
      greetingText = "Good Afternoon!";
    } else if (hour >= 17 && hour < 21) {
      greetingText = "Good Evening!";
    } else {
      greetingText = "Good Night!";
    }

    greetingEl.textContent = greetingText;
  }

  // Trigger hero slide-in animation on load
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    setTimeout(() => {
      heroSection.classList.add("slide-in");
    }, 100);
  }
});
