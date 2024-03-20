function setClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Months are zero-based, so we add 1
  const day = now.getDate();

  const hourDegree = (hours % 12) * 30 + minutes * 0.5;
  const minuteDegree = minutes * 6;
  const secondDegree = seconds * 6;

  const hourHand = document.querySelector('.clock__hour-hand');
  const minuteHand = document.querySelector('.clock__minute-hand');
  const secondHand = document.querySelector('.clock__second-hand');

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const clockHours = document.getElementById('clock-hours');
  const clockMinutes = document.getElementById('clock-minutes');
  clockHours.textContent = `${hours < 10 ? '0' + hours : hours}`;
  clockMinutes.textContent = `${minutes < 10 ? '0' + minutes : minutes}`;

  const clockDate = document.getElementById('clock-date');
  clockDate.textContent = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`; // Format date as YYYY-MM-DD
}

setInterval(setClock, 1000);
