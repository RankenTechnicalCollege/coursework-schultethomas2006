"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Thomas Schulte
      Date:   11/16/25

      Filename: project07-03.js
*/

// Time calculation constants (in milliseconds)
const oneSecond = 1000;
const oneMinute = oneSecond * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");


function countdown() {


const now = new Date();
currentTime.textContent = now.toLocaleString();
const currentYear = now.getFullYear();
const nextYear = currentYear + 1;
const newYear = new Date(`January 1, ${nextYear}`);
// Calculate the difference between newYear and now in milliseconds
            const timeRemaining = newYear.getTime() - now.getTime();

            // Check if time has run out (shouldn't happen often, but good for safety)
            if (timeRemaining <= 0) {
                 daysLeftBox.textContent = "00";
                 hrsLeftBox.textContent = "00";
                 minsLeftBox.textContent = "00";
                 secsLeftBox.textContent = "00";
                 // Optionally, display a "Happy New Year" message
                 return;
            }

            // --- Calculations as specified in the steps ---

            // 3. Calculate daysLeft (floating point)
            let daysLeft = timeRemaining / oneDay;

            // 4. Calculate hrsLeft (fractional part of daysLeft multiplied by 24)
            let hrsLeft = (daysLeft % 1) * 24;

            // 5. Calculate minsLeft (fractional part of hrsLeft multiplied by 60)
            let minsLeft = (hrsLeft % 1) * 60;

            // 6. Calculate secsLeft (fractional part of minsLeft multiplied by 60)
            let secsLeft = (minsLeft % 1) * 60;



            const formatTime = (time) => Math.floor(time).toString().padStart(2, '0');

            daysLeftBox.textContent = formatTime(daysLeft);
            hrsLeftBox.textContent = formatTime(hrsLeft);
            minsLeftBox.textContent = formatTime(minsLeft);
            secsLeftBox.textContent = formatTime(secsLeft);
        }

window.onload = function() {
      countdown();
      setInterval(countdown, 1000);
}