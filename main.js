const clockTarget = document.getElementById("clock");

function updateClock() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDay = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clockTarget.innerText = `${month}월 ${day}일 ${weekDay}요일 
  ${hours}:${minutes}:${seconds}`;
}

// 시계 시작
updateClock();
setInterval(updateClock, 1000);

// 배터리 관련
let batteryLevel = 100;

function setBattery(level) {
  const batteryContainer = document.querySelector(".battery-container");
  batteryContainer.textContent = `배터리 : ${level}%`;
}

function startBatteryDrain() {
  setInterval(() => {
    if (batteryLevel > 0) {
      batteryLevel -= 10;
      setBattery(batteryLevel);
    } else {
      const clockTarget = document.getElementById("clock");
      clockTarget.style.color = "black";
      clockTarget.style.backgroundColor = "black";
    }
  }, 1000);
}

// DOM 로딩 후 초기화
document.addEventListener("DOMContentLoaded", () => {
  setBattery(batteryLevel);
  startBatteryDrain();
});

// 알람 관련
