var image;

function displayURLFromTime() {
  var pad = n => n < 10 ? "0" + n : n;
  var d = new Date();
  image.src = `./images/${pad(d.getHours())}_${pad(d.getMinutes())}_00.jpg`;
}

window.onload = function() {
  image = document.getElementById("image");
  setInterval(displayURLFromTime,500);
}
