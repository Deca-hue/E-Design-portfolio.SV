// Set the target date for the countdown (e.g., project launch date)
const targetDate = new Date('December 25, 2024 00:00:00').getTime();

// Elements for displaying countdown
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Function to update the countdown timer
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the countdown display
  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;

  // If the countdown ends
  if (distance < 0) {
    clearInterval(interval);
    daysEl.innerText = hoursEl.innerText = minutesEl.innerText = secondsEl.innerText = "00";
  }
}

// Update countdown every second
const interval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown
updateCountdown();
