let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.getElementById("display");
let int = null;
let startStopPause = document.getElementById("startStopPause");
let running = false;

startStopPause.addEventListener("click", () => {
  if (startStopPause.innerHTML === "Start") {
    int = setInterval(displayTimer, 10);
    startStopPause.innerHTML = "Pause";
    running = true;
  } else if (startStopPause.innerHTML === "Pause") {
    clearInterval(int);
    startStopPause.innerHTML = "Play";
  } else {
    //startStopPause.innerHTML==='Play'
    int = setInterval(displayTimer, 10);
    startStopPause.innerHTML = "Pause";
  }
});

document.getElementById("lap").addEventListener("click", () => {
  document.getElementById("title").innerHTML = "Laps:";
  if (running) {
    let lapTime = document.createElement("li");
    lapTime.innerHTML = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
    document.getElementById("laps").appendChild(lapTime);
  }
});

document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("title").innerHTML = "";
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00 : 000 ";
  document.getElementById("startStopPause").innerHTML = "Start";
  document.getElementById("laps").innerHTML = "";
  running = false;
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
