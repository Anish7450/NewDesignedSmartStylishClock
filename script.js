(() => {
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const ampmEl = document.getElementById('ampm');

  function pad(n) {
    return n < 10 ? '0'+n : n;
  }

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const isPM = hours >= 12;
    if(hours === 0) hours = 12;
    else if(hours > 12) hours -= 12;

    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
    ampmEl.textContent = isPM ? 'PM' : 'AM';
  }

  updateClock();
  setInterval(updateClock, 1000);
})();