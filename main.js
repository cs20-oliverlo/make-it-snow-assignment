// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 720;
cnv.height = 480;

// Global Variables
let numOfFlakes = randomInt(5, 11);
let snowflake = [];
for (let i = 0; i < numOfFlakes; i++) {
  snowflake.push(
    {
    x: randomInt(0, 720),
    y: randomInt(0, 480),
    r: randomInt(2, 5),
    xSpeed: randomDec(-10, 10),
    ySpeed: randomDec(5, 8)
    }
  )
}

requestAnimationFrame(drawAnimation);
// Drawing stuff
function drawAnimation() {
  // Clear Canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw snowflake
  for (let i = 0; i < snowflake.length; i++) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(snowflake[i].x, snowflake[i].y, snowflake[i].r, 0, 2 * Math.PI);
    ctx.fill();
    snowflake[i].x += snowflake[i].xSpeed;
    snowflake[i].y += snowflake[i].ySpeed;

    // Teleport flakies!
    if (snowflake[i].x > cnv.width || snowflake[i].y > cnv.height) {
      snowflake[i].x = randomInt(0,720);
      snowflake[i].y = 0;
    }
  }

  // Request Animation Frame
  requestAnimationFrame(drawAnimation);
}

// EVENT STUFF
document.addEventListener("keydown", keydownHandler);

function mousedownHandler() {
  mouseIsPressed = true;
    numOfFlakes++;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function keydownHandler(event) {
  if (event.code === "KeyA") {
    numOfFlakes--;
    console.log(numOfFlakes);
  }
  if (event.code === "KeyD") {
    numOfFlakes++;
    console.log(numOfFlakes);
  }
  if (event.code === "ArrowLeft") {
    numOfFlakes--;
    console.log(numOfFlakes);
  }
  if (event.code === "ArrowRight") {
    numOfFlakes++;
    console.log(numOfFlakes);
  }
}
