
// Three events that will happen
var stopLight = document.getElementById('star');
var marioRun = document.getElementById('mario');
var yoshiRun = document.getElementById('yoshi');

stopLight.addEventListener("click", startRace);
myTimer = setInterval(startRace, 3000);

function startRace(){
     stopLight = document.getElementById('star').src = "on.png";
     marioRun = document.getElementById('mario').src = "mariorun.png";
     yoshiRun = document.getElementById('yoshi').src = "yoshirun.png";
}
