// Countdown Timer Script
function startCountdown() {
  const countdowns = document.querySelectorAll('.countdown');

  countdowns.forEach(timer => {
    const targetDate = new Date(timer.getAttribute('data-date')).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        timer.innerHTML = "Event Started";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  });
}

startCountdown();


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
