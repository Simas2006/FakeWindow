function displayURLFromTime() {
  var pad = n => n < 10 ? "0" + n : n;
  var d = new Date();
  document.body.style.backgroundImage = `url("./images/${pad(d.getHours())}_${pad(d.getMinutes())}_00.jpg")`;
}

window.onload = function() {
  setInterval(displayURLFromTime,500);
}
