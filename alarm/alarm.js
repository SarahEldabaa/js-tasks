window.addEventListener("load", buildIt);

function buildIt() {
  startTime();
  hrsMenu();
  minsMenu();
  secsMenu();
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var time = checkZero(h) + ":" + checkZero(m) + ":" + checkZero(s);
  document.querySelector(".time").innerHTML = time;
  var t = setTimeout(startTime, 500);
}

function checkZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function hrsMenu() {
  var select = document.getElementById("hrs");
  var hours = 23;

  for (i = 0; i <= hours; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}

function minsMenu() {
  var select = document.getElementById("mins");
  var mins = 59;

  for (i = 0; i <= mins; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}

function secsMenu() {
  var select = document.getElementById("secs");
  var secs = 59;

  for (i = 0; i <= secs; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}

document.getElementById("setAlarm").addEventListener("click", setAlarm);
document.getElementById("clearAlarm").addEventListener("click", clearAlarm);

function setAlarm() {
  var hour = document.getElementById("hrs");
  var min = document.getElementById("mins");
  var sec = document.getElementById("secs");

  var selectedHour = hour.options[hour.selectedIndex].value;
  var selectedMin = min.options[min.selectedIndex].value;
  var selectedSec = sec.options[sec.selectedIndex].value;

  var alarmTime =
    addZero(selectedHour) +
    ":" +
    addZero(selectedMin) +
    ":" +
    addZero(selectedSec);

  document.getElementById("hrs").disabled = true;
  document.getElementById("mins").disabled = true;
  document.getElementById("secs").disabled = true;

  setInterval(function playAlarmSound() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var time = addZero(h) + ":" + addZero(m) + ":" + addZero(s);

    if (time == alarmTime) {
      myAudio.play();
      myAudio.loop = true;
    }
  }, 1000);
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function clearAlarm() {
  document.getElementById("hrs").disabled = false;
  document.getElementById("mins").disabled = false;
  document.getElementById("secs").disabled = false;
}
