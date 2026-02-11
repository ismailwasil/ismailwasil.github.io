// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("py-2");
    nav.classList.remove("py-4");
  } else {
    nav.classList.add("py-4");
    nav.classList.remove("py-2");
  }
});
