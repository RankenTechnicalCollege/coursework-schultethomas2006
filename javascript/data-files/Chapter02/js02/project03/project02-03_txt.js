/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Thomas Schulte
      Date: 10/26/25

      Filename: project02-03.js
 */

/* JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Thomas Schulte
      Date: 10/26/25

      Filename: project02-03.js
*/


const square = document.getElementById("square");
const triangle = document.getElementById("triangle");
const circle = document.getElementById("circle");
const feedback = document.getElementById("feedback");


square.addEventListener('mouseover', function() {
    feedback.innerHTML = "You're hovering over the square";
});


square.addEventListener('mouseout', function() {
    feedback.innerHTML = "";
});


triangle.addEventListener('mouseover', function() {
    feedback.innerHTML = "You're hovering over the triangle";
});


triangle.addEventListener('mouseout', function() {
    feedback.innerHTML = "";
});


circle.addEventListener('mouseover', function() {
    feedback.innerHTML = "You're hovering over the circle";
});


circle.addEventListener('mouseout', function() {
    feedback.innerHTML = "";
});