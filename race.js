

// Declaring variables for events
    let stopLight = document.getElementById('star');
    let marioRun = document.getElementById('mario');
    let yoshiRun = document.getElementById('yoshi');
    let yoshiWin = document.getElementById('yoshiWin');
    let marioWin = document.getElementById('winMario');


// onlick event for starting race by clicking stopLight variable
    stopLight.addEventListener("click", startRace);
    yoshiWin.addEventListener("click", startRace);
    marioWin.addEventListener("click", startRace);

// function that runs the click event and swaps images and styles the racers to the left.
function startRace() 
{
     stopLight = document.getElementById('star').src = "on.png";
     marioRun = document.getElementById('mario').src = "mariorun.png";
     yoshiRun = document.getElementById('yoshi').src = "yoshirun.png";
     document.getElementById('mario').style.left = "0px";
     document.getElementById('yoshi').style.left = "0px";
}
// 2nd function makes characters race by random generated number with pixles added.
// Also displays Winner
var myTime = setInterval(takeOff, 10); 

function takeOff() 
{

    var rand = Math.round(Math.random() * 10);
    var rand2 = Math.round(Math.random() * 10);
    let marioRacer = document.getElementById('mario').style.left
    let yoshiRacer = document.getElementById('yoshi').style.left
   
    marioRacer = document.getElementById('mario').style.left = (parseInt(document.getElementById('mario').style.left) + rand) + "px";
    yoshiRacer = document.getElementById('yoshi').style.left = (parseInt(document.getElementById('yoshi').style.left) + rand2) + "px";


   //if statment to stop racer at finsh point
    if (parseInt(marioRacer) >= 900) {
    myStop();
    document.getElementById("yoshi").style.visibility = "hidden";
    document.getElementById('mario').style.visibility = "hidden";
    document.getElementById("winMario").style.visibility = "visible";

}   else if (parseInt(yoshiRacer) >= 900) 
{
   myStop();
   document.getElementById("yoshi").style.visibility = "hidden";
   document.getElementById('mario').style.visibility = "hidden";
   document.getElementById('yoshiWin').style.visibility = "visible";

}

    yoshiWin.addEventListener("click", revealImages);
    marioWin.addEventListener("click", revealImages);

function revealImages()
{
    document.getElementById("yoshi").style.visibility = "visible";
    document.getElementById("mario").style.visibility = "visible";
    document.getElementById("winMario").style.visibility = "hidden";
    document.getElementById("yoshiWin").style.visibility = "hidden";
}


}

function myStop() 
{
    clearInterval(myTime)
}