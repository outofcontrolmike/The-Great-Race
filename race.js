
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
     document.getElementById('mario').style.left = 0;
    document.getElementById('yoshi').style.left = 0;

// function that starts race

var myTime = setInterval(startRace, 10);
var marioRacer = document.getElementById('mario')
var yoshiRacer = document.getElementById('yoshi');

function startRace() {
    var rand = Math.round(Math.random() * 20);
    var rand2 = Math.round(Math.random() *20);
   var marioRacer = document.getElementById('mario').style.left = (parseInt(document.getElementById('mario').style.left) + rand2) + 'px';
   var yoshiRacer = document.getElementById('yoshi').style.left = (parseInt(document.getElementById('yoshi').style.left) + rand) + 'px';

   //testing purposes
   console.log(rand2);
   console.log(marioRacer);


   if (marioRacer >= 1000) {
    alert("Mario is number 1!");
    stopRace();

}else if (yoshiRacer >= 1000) {
    alert("Yoshi wins the race!");
}   stopRace2();


function myStopFunction() {
    clearInterval(myTime)
}
}}

// Function that preprares load up screen by clicking winner