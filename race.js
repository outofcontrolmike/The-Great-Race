
// Three events that will happen/ declaring variables
    let stopLight = document.getElementById('star');
    let marioRun = document.getElementById('mario');
    let yoshiRun = document.getElementById('yoshi');

// function that prepares race, swaps images


stopLight.addEventListener("click", startRace);


function startRace(){

     stopLight = document.getElementById('star').src = "on.png";
     marioRun = document.getElementById('mario').src = "mariorun.png";
     yoshiRun = document.getElementById('yoshi').src = "yoshirun.png";
     document.getElementById('mario').style.left = 0;
     document.getElementById('yoshi').style.left = 0;

// function that starts race

    var myTime = setInterval(startRace, 20);
   
// 
function startRace() {
    var rand = Math.round(Math.random() * 20);
    var rand2 = Math.round(Math.random() *20);
    let marioRacer = document.getElementById('mario').style.left = (parseInt(document.getElementById('mario').style.left) + rand2) + 'px';
    let yoshiRacer = document.getElementById('yoshi').style.left = (parseInt(document.getElementById('yoshi').style.left) + rand) + 'px';

   //testing purposes
   console.log(rand2);
   console.log(marioRacer);

   //if statment to stop racer at finsh point


    if (marioRacer >= 1200) {
    alert("Mario is number 1!");
    myStopFunction();

}   else if (yoshiRacer >= 1200) {
    alert("Yoshi wins the race!");
}   myStopFunction();



/*function myStopFunction() {
    clearInterval(myTime)
*/ 

}}

// Function that preprares load up screen by clicking winner
flagChange.addEventListener("click", resetPage);


function resetPage() {
    document.getElementById()
}
let marioStand = document.getElementById('mario').src = "mario.png";   
let yoshiStand = document.getElementById('yoshi').src = "yoshi.png";
let starChange =     document.getElementById('star').src = "off.png";
let flagChange = document.getElementById('flag').src = "flag.png";


// Need to figure out how to make characters stop at a certain pixel

// Need to figure out how to click winner and reset page.  Maybe have it to where I can click on either or image?  