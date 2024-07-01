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

function dayTime() {
  let today = new Date();
  let day = today.getDay();

  const currentDay = days[day];
  myDay.innerHTML = "Day:" + " " + currentDay;

  let hour = today.getUTCHours();
  let minute = today.getUTCMinutes();
  let seconds = today.getUTCSeconds();
  myTime.innerHTML = `Time: ${hour}:${minute}:${seconds}`;
}

setInterval(dayTime, 100);
