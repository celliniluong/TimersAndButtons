/***********************************************************************************
 Cellini Luong
 Timer and Buttons Assignment

In this assignment, I am creating a clickable button that starts a timer.
***********************************************************************************/

// uninitialized object
var simpleTimer;

var waitForClick = true;
var elapsedSeconds = 0;

var click2;

// Setup code
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set up simple timer and start timer
  simpleTimer = new Timer(1000);
  simpleTimer.start();

  // Text setup
  textAlign(CENTER);
  textSize(24);
  fill(255);

  // Button setup
  click2 = new Clickable();
  
  // Button design details
  click2.cornerRadius = 0;
  click2.locate(windowWidth/2 - 150, windowHeight/2);
  click2.textScaled = true;
  click2.text = "START TIMER";
  click2.resize(300, 100);
  
  // Button states
  click2.onOutside = function () {
    this.color = "#FFFFFF";
  }
  click2.onHover = function () {
    this.color = "#F2F2F2";
  }
  click2.onPress = function () {
    waitForClick = false;
    simpleTimer.start();
    frameRate(100);
  }
 }


// Calling out button and timer in draw function
function draw() {
  background(128, 128, 0);

  click2.draw();

  if( waitForClick ) {
    text();
  }
  else{
   updateTimer(); 
  }
}


// Looks for elapsed time and prints TIMES UP once expired
function updateTimer() {
  if( simpleTimer.expired() ) {
    textSize(100);
    text("TIMES UP", width/2, 120);
    waitForClick = true;
    frameRate(2);
  }

  else{
    text( Math.round(simpleTimer.getRemainingTime()), width/2, 60)
  }
}

