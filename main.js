// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 720;
cnv.height = 480;

// Global Variables
let numOfFlakes = 25;


// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function mousedownHandler() {
  mouseIsPressed = true;

}

function mouseupHandler() {
  mouseIsPressed = false;
}

function keydownHandler(event) {
  if (event.code === "KeyA") {

  }
  if (event.code === "KeyD") {
    
  }
}

function keyupHandler(event) {
  if (event.code === "KeyA") {

  }
  if (event.code === "KeyD") {
    
  }
}