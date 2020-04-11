var fs = require("fs");
var image,currentLink;
var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function displayURLFromTime() {
  var pad = n => n < 10 ? "0" + n : n;
  var d = new Date();
  var nextLink = `${__dirname}/../images/${pad(d.getHours())}_${pad(d.getMinutes())}_00.jpg`;
  if ( currentLink == nextLink ) return;
  currentLink = nextLink;
  var ampm = (d.getHours() >= 12 ? "P" : "A");
  var readableHours = (ampm == "A" ? d.getHours() : d.getHours() - 12) || 12;
  document.getElementById("timeText").innerText = `${readableHours}:${pad(d.getMinutes())} ${ampm}M`;
  document.getElementById("dateText").innerText = `${daysOfWeek[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  fs.stat(nextLink,function(err,data) {
    if ( err && err.code == "ENOENT" ) return;
    image.src = nextLink;
  });
}

window.onload = function() {
  image = document.getElementById("image");
  setInterval(displayURLFromTime,500);
}
