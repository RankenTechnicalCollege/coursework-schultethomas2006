"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Thomas Schulte
      Date:   11/23/25

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800; // width of the container in pixels

/*--------------- Object Code --------------------*/

// Step 1: Create the box object literal
const box = {
   width: BOX_WIDTH,
  height: BOX_HEIGHT,
  xPos: 0,
  yPos: 0
};

// Step 2: Create the Ball constructor function
function Ball(size) {
  this.radius = size;
  this.xPos = null;
  this.yPos = null;
  this.xVelocity = null;
  this.yVelocity = null;
}

// Step 3: Create the moveWithin() method for the Ball prototype
Ball.prototype.moveWithin = function(container) {
  // Set the top and left positions of the ball
  let ballTop = this.yPos;
  let ballLeft = this.xPos;

  // Set the bottom and right positions of the ball
  let ballBottom = this.yPos + this.radius;
  let ballRight = this.xPos + this.radius;

  // Step 4: Vertical bounce
  if (ballTop < 0 || ballBottom > container.height) {
    // i. increase container.yPos by the value of this.yVelocity
    container.yPos += this.yVelocity;
    // ii. set this.yVelocity = –this.yVelocity
    this.yVelocity = -this.yVelocity;
  }

  // Step 5: Horizontal bounce
  if (ballLeft < 0 || ballRight > container.width) {
    // i. increase container.xPos by the value of this.xVelocity
    container.xPos += this.xVelocity;
    // ii. set this.xVelocity = –this.xVelocity
    this.xVelocity = -this.xVelocity;
  }

  // Step 6: Move the ball within the container
  this.yPos += this.yVelocity;
  this.xPos += this.xVelocity;
};

/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {

 let ballImage = document.createElement("div");
 ballImage.className = "ball";
 ballImage.style.width = BALL_RADIUS + "px";
 ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
 ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";

// Append the ball image to the box
boxImage.appendChild(ballImage);

// Step 7: Create a new Ball object instance and set initial properties
let newBall = new Ball(BALL_RADIUS);

// Center the newBall
newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;

// Give newBall an initial random velocity
newBall.yVelocity = rand(-10, 10);
newBall.xVelocity = rand(-10, 10);

// Step 8: Animate the motion of newBall
window.setInterval(function() {
    // Apply the moveWithin() method
    newBall.moveWithin(box);

    // Move the image of the ball
    ballImage.style.top = newBall.yPos + "px";
    ballImage.style.left = newBall.xPos + "px";

    // Shake the image of the container
    boxImage.style.top = box.yPos + "px";
    boxImage.style.left = box.xPos + "px";

}, 25);


};


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}