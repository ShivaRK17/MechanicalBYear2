let btn = document.getElementById("btn");
let sp = document.querySelector(".sidepanel");
let sidecon = document.querySelector(".sidecont"); 

function openmenu(){
    // sp.style.width = "30vw";
    sp.style.transform = "rotateY(0deg)";
}
function closepanel(){
    // sp.style.width = "0vw";
    sp.style.transform = "rotateY(90deg)";
}