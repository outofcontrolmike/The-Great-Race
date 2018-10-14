
// Three events that will happen
var stopLight = document.getElementById('star');
var marioRun = document.getElementById('mario');
var yoshiRun = document.getElementById('yoshi');

// function that prepares race, swaps images

stopLight.addEventListener("click", startRace);

function startRace(){
     stopLight = document.getElementById('star').src = "on.png";
     marioRun = document.getElementById('mario').src = "mariorun.png";
     yoshiRun = document.getElementById('yoshi').src = "yoshirun.png";
     

// function that starts race

document.getElementById('mario').style.left = 0;
document.getElementById('yoshi').style.left = 0;

setInterval(function(){
    var rand = Math.round(Math.random() * 20);
    document.getElementById('mario').style.left = (parseInt(document.getElementById('mario').style.left) + rand) + 'px';
    document.getElementById('yoshi').style.left = (parseInt(document.getElementById('yoshi').style.left) + rand) + 'px';
}, 500)}
