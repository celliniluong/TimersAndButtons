/***********************************************************************************
  Simple Counter

  Uses the p5.timer.js class to show elapsed seconds on the screen

------------------------------------------------------------------------------------
  To use:
  Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// uninitialized object
var simpleTimer;

var waitForClick = true;
var elapsedSeconds = 0;

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  simpleTimer = new Timer(1000);
  simpleTimer.start();

  textAlign(CENTER);
  textSize(24);
  fill(255);

  setTimeout(drawButton, 5000);
 }

function drawButton() {
  background(0); 
}



// Draw code goes here
function draw() {
  background(128, 128, 0);

  if( waitForClick ) {
    text( "Click on mouse to begin timer", width/2, 60);
  }
  else{
   updateTimer(); 
  }
}


// Looks for elapsed time
function updateTimer() {
  if( simpleTimer.expired() ) {
    text("BOOM", width/2, 60);
    waitForClick = true;
  }

  else{
    text( Math.round(simpleTimer.getRemainingTime()), width/2, 60)
  }
}

function mousePressed() {
  waitforClick = false;
  simpleTimer.start();
}