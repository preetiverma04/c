let today;
let h;
let m;
let s;
let d;
let month;
let year;
function getTime() {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  d = today.getDate();
  month = today.getMonth() + 1;
  year = today.getFullYear();

  m = check_time(m);
  s = check_time(s);
  document.getElementById('current_time').innerHTML = " Current Time:" + "<b>" + h + ":" + m + ":" + s + "<br> " + "date:" + "(" + d + "-" + month + "-" + year + ")" + "</b>";
  setTimeout(getTime, 1000);
}
getTime();
function check_time(a) {
  if (a < 10) {
    a = "0" + a;
  }
  return a;
}
function set_alarm() {
  var today_set_alarm = new Date();
  var hours = today_set_alarm.getHours();
  var minutes = today_set_alarm.getMinutes();
  hours = document.getElementById("hours").value;
  minutes = document.getElementById("minutes").value;
  document.getElementById("set_alarm_time").innerHtml = "alrm_set_for:" + hours + ":" + minutes;
  setTimeout(set_alarm, 1000);
  if (h == hours && m == minutes) {
    alarmAudio.play();
    navigator.vibrate(1000);
  }
}