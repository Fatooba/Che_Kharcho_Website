function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Attach the function to scroll event
window.addEventListener("scroll", handleNavbarScroll);