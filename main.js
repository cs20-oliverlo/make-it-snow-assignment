// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 720;
cnv.height = 480;

// Global Variables
let numOfFlakes = randomInt(10, 501);
console.log(`${numOfFlakes} Snowflakes`);
if (numOfFlakes <= 100) {
  console.log("Boy, it's chilly!");
} else if (numOfFlakes <= 200) {
  console.log("Bring a coat!");
} else if (numOfFlakes <= 300) {
  console.log("I don't know, it's cold.");
} else {
  console.log("Blizzard!");
}

let snowflake = [];
for (let i = 0; i < numOfFlakes; i++) {
  newFlake();
}

// Update the Number of Snowflakes
function checkFlakes() {
  if (snowflake.length < numOfFlakes) {
    newFlake();
  } else if (snowflake.length > numOfFlakes) {
    snowflake.pop();
  }
}


// Drawing stuff
requestAnimationFrame(drawAnimation);
function drawAnimation() {
  // Clear Canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  for (let i = 0; i < snowflake.length; i++) {
    // Draw snowflake
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(snowflake[i].x, snowflake[i].y, snowflake[i].r, 0, 2 * Math.PI);
    ctx.fill();

    // Move Snowflakes
    snowflake[i].x += snowflake[i].xSpeed;
    snowflake[i].y += snowflake[i].ySpeed;

    // Teleport flakies!
    if (snowflake[i].x < -50 || snowflake[i].x > cnv.width + 50 || snowflake[i].y > cnv.height + 6) {
      snowflake[i].x = randomDec(0,720);
      snowflake[i].y = 0;
    } else if (snowflake[i].y < 0) {
      snowflake[i].x = randomDec(0,720);
      snowflake[i].ySpeed = 7;
    }

    // Flutteryness (adds some spice)
    snowflake[i].xSpeed += randomDec(-1, 1);
    snowflake[i].ySpeed += randomDec(-1, 1);

    // Max Speed
    if (snowflake[i].xSpeed > 10) {
      snowflake[i].xSpeed = 10;
    }
    if (snowflake[i].ySpeed > 8) {
      snowflake[i].ySpeed = 8;
    }
    if (snowflake[i].xSpeed < -10) {
      snowflake[i].xSpeed = -10;
    }
    if (snowflake[i].ySpeed < -1) {
      snowflake[i].ySpeed = -1;
    }
  }

  // Calls function to update the number of SnowFlakes
  checkFlakes();

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

// Helper Function
function newFlake() {
  snowflake.push(
    {
    x: randomDec(0, 720),
    y: randomDec(0, 480),
    r: randomDec(2, 15),
    xSpeed: randomDec(-10, 10),
    ySpeed: randomDec(5, 8)
    }
  )
}