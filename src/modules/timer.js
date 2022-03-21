const timer = (deadline) => {
  const timerDays = document.querySelectorAll('.timer-day');
  const timerHours = document.querySelectorAll('.timer-hours');
  const timerMinutes = document.querySelectorAll('.timer-minutes');
  const timerSeconds = document.querySelectorAll('.timer-seconds');

  const addZero = (num) => {
    return num.toString().length === 1 ? '0' + num : num;
  };

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    
    if (timeRemaining <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = (start) => {
    let getTime = getTimeRemaining();

    for (let i = 0; i < timerDays.length; i++) {
      timerDays[i].textContent = addZero(getTime.days);
      timerHours[i].textContent = addZero(getTime.hours);
      timerMinutes[i].textContent = addZero(getTime.minutes);
      timerSeconds[i].textContent = addZero(getTime.seconds);
    }

    if (start && getTime.timeRemaining > 0) {
      setInterval(updateClock, 1000, false);
    }
  };
  updateClock(true);
};

export default timer;
