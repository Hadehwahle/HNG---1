const myTime = document.getElementById("time");
const myDay = document.getElementById("day");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}

function dayTime() {
  let today = new Date();
  let day = today.getDay();

  const currentDay = days[day];
  myDay.innerHTML = "Day:" + " " + currentDay;

  let hour = today.getUTCHours();
  const minute = today.getUTCMinutes();
  const seconds = today.getUTCSeconds();
  const meridien = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  myTime.innerHTML = `Time: ${padZero(hour)}:${padZero(minute)}:${padZero(
    seconds
  )} ${meridien}`;
}

setInterval(dayTime, 1000);
