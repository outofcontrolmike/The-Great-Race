

// Three divs to grab for image swap
    let stopLight = document.getElementById('star');
    let marioRun = document.getElementById('mario');
    let yoshiRun = document.getElementById('yoshi');


// onlick event for starting race by clicking stopLight variable
    stopLight.addEventListener("click", startRace);

// function that runs the click event and swaps images and styles the racers to the left.
// 2nd function makes characters race by random generated number with pixles added.

function startRace() 
{

     stopLight = document.getElementById('star').src = "on.png";
     marioRun = document.getElementById('mario').src = "mariorun.png";
     yoshiRun = document.getElementById('yoshi').src = "yoshirun.png";
     document.getElementById('mario').style.left = "0px";
     document.getElementById('yoshi').style.left = "0px";
}
// function that generates random number for racers and starts a timer.  

var myTime = setInterval(takeOff, 50); 

function takeOff() 
{

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
    if (parseInt(marioRacer) >= 1200) {
    myStop();

}   else if (parseInt(yoshiRacer) >= 1200) {
   myStop();
}}


function myStop() 
{
    clearInterval(myTime)
}




// Function that preprares load up screen by clicking winner

    let marioStand = document.getElementById('mario'); 
    let yoshiStand = document.getElementById('yoshi');
    let starChange = document.getElementById('star');
    let flagAction = document.getElementById('flag');

    flagAction.addEventListener("click", resetPage);

function resetPage() 
{
    marioStand = document.getElementById('mario').src = "mariowin.png"; 
    yoshiStand = document.getElementById('yoshi').src = "yoshiwin.png";
    starChange = document.getElementById('star').src = "off.png";
}
