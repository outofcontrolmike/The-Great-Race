
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
     
}

// function that starts race

var moveMario = document.getElementById('mario');
var moveYoshi = document.getElementById('yoshi');
var moveLight = document.getElementById('star');

moveLight.addEventListener("click", moveImage);
myTimer = setInterval(moveImage, 3000);

function moveImage() {
    document.getElementById('mario').style.right;
}   document.getElementById('yoshi').style.right;
