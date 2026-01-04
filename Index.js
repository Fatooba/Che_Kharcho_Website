 const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    let index = 0;

    document.getElementById('next').addEventListener('click', () => {
      index = (index + 1) % totalSlides;
      slides.style.transform = `translateX(-${index * 100}%)`;
    });

    document.getElementById('prev').addEventListener('click', () => {
      index = (index - 1 + totalSlides) % totalSlides;
      slides.style.transform = `translateX(-${index * 100}%)`;
    });

  window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


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

// -------- table reservation --------

document.addEventListener('DOMContentLoaded', startCountdown);

document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // You can add backend submission logic here if needed

  document.getElementById("confirmationPopup").classList.remove("hidden");
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("confirmationPopup").classList.add("hidden");
  document.getElementById("reservationForm").reset();
});
