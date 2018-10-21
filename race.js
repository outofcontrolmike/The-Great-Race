

// Three divs to grab for image swap
    let stopLight = document.getElementById('star');
    let marioRun = document.getElementById('mario');
    let yoshiRun = document.getElementById('yoshi');


// onlick event for starting race by clicking stopLight variable
    stopLight.addEventListener("click", startRace);

// function that runs the click event and swaps images and styles the racers to the left.
// 2nd function makes characters race by random generated number with pixles added.

function startRace() {

     stopLight = document.getElementById('star').src = "on.png";
     marioRun = document.getElementById('mario').src = "mariorun.png";
     yoshiRun = document.getElementById('yoshi').src = "yoshirun.png";
     document.getElementById('mario').style.left = "0px";
     document.getElementById('yoshi').style.left = "0px";

// function that generates random number for racers and starts a timer.  

    var myTime = setInterval(takeOff, 50); 

function takeOff() {
    var rand = Math.round(Math.random() * 10);
    var rand2 = Math.round(Math.random() * 10);
    let marioRacer = document.getElementById('mario').style.left
    let yoshiRacer = document.getElementById('yoshi').style.left
   
    marioRacer = document.getElementById('mario').style.left = (parseInt(document.getElementById('mario').style.left) + rand) + "px";
    yoshiRacer = document.getElementById('yoshi').style.left = (parseInt(document.getElementById('yoshi').style.left) + rand2) + "px";

   //testing purposes
   console.log(rand2);
   console.log(marioRacer);

   //if statment to stop racer at finsh point
    if (marioRacer >= "1200px") {
    myStop();

}   else if (yoshiRacer >= "1200px") {
}   myStop();


/*function myStop() {
    clearInterval(myTime)
*/

}}


// Function that preprares load up screen by clicking winner

    let marioStand = document.getElementById('mario'); 
    let yoshiStand = document.getElementById('yoshi');
    let starChange = document.getElementById('star');
    let flagAction = document.getElementById('flag');

    flagAction.addEventListener("click", resetPage);

function resetPage() {
    marioStand = document.getElementById('mario').src = "mariowin.png"; 
    yoshiStand = document.getElementById('yoshi').src = "yoshiwin.png";
    starChange = document.getElementById('star').src = "off.png";
}







/*

*If Statement - Can not figure out how to get If statment to read 
characters reaching a certain pixel on screen and stopping the race. 

*myStop Function - Racer's won't move across screen if it's activated.

*resetPage function - 

I wanted to be able to have the option to click the flag and reset the page.
All I was able to get was swapping the images out.  The characters won't style back to the 
left of the screen since my race never stops.  The If statment does work, I tested with alert command.

// if (marioRacer >= "1200px") {
    alert("Mario is number 1!")
    myStop();

}   else if (yoshiRacer >= "1200px") {
    (alert("yoshi wins!")
}   myStop();
*

*/
