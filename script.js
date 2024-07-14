function startCountdown() {
    const countdownDate = document.getElementById('countdown-date').value;
    const targetDate = new Date(countdownDate).getTime();
  
    if (isNaN(targetDate)) {
      alert('Please select a valid date and time.');
      return;
    }
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      if (distance < 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = 'Countdown Ended';
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;
    }, 1000);
  }
  