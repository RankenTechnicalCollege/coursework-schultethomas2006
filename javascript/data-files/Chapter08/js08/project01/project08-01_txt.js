"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Thomas Schulte
      Date:   11/23/25

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

        /**
         * Timer object constructor function.
         * @param {number} min Initial minutes value.
         * @param {number} sec Initial seconds value.
         */
        function timer(min, sec) {
            this.minutes = parseInt(min, 10);
            this.seconds = parseInt(sec, 10);
            this.timeID = null;
        }

        /**
         * The countdown logic, decrements the time every second.
         * @param {object} timer The timer instance (e.g., myTimer).
         * @param {HTMLElement} minBox The minutes input field.
         * @param {HTMLElement} secBox The seconds input field.
         */
        timer.prototype.countdown = function(timer, minBox, secBox) {
            const statusMsg = document.getElementById("statusMessage");

            if (timer.seconds > 0) {
                timer.seconds -= 1;
            } else if (timer.minutes > 0) {
                timer.minutes -= 1;
                timer.seconds = 59;
            } else {
                window.clearInterval(timer.timeID);
                timer.timeID = null;
                runPauseTimer.value = "RUN / PAUSE";
                minBox.disabled = false;
                secBox.disabled = false;
                statusMsg.textContent = "Timer finished!";
            }

            minBox.value = timer.minutes;
            secBox.value = timer.seconds;
        };

        /**
         * Starts or pauses the timer.
         * @param {object} timer The timer instance (e.g., myTimer).
         * @param {HTMLElement} minBox The minutes input field.
         * @param {HTMLElement} secBox The seconds input field.
         */
        timer.prototype.runPause = function(timer, minBox, secBox) {
            const statusMsg = document.getElementById("statusMessage");

            if (timer.timeID) {
                window.clearInterval(timer.timeID);
                timer.timeID = null;
                runPauseTimer.textContent = "RESUME";
                minBox.disabled = false;
                secBox.disabled = false;
                statusMsg.textContent = "Timer paused.";
            } else {

                if (timer.minutes === 0 && timer.seconds === 0) {
                     statusMsg.textContent = "Timer is already at 0:0. Set new time.";
                     return;
                }

                timer.timeID = window.setInterval(
                    timer.countdown.bind(timer, timer, minBox, secBox),
                    1000
                );

                runPauseTimer.textContent = "PAUSE";
                minBox.disabled = true;
                secBox.disabled = true;
                statusMsg.textContent = "Timer running...";
            }
        };

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

        let myTimer = new timer(minBox.value, secBox.value);

        minBox.onchange = function() {
            const newMin = parseInt(minBox.value, 10);
            if (!isNaN(newMin) && newMin >= 0) {
                myTimer.minutes = newMin;
            } else {
                minBox.value = myTimer.minutes;
            }
            document.getElementById("statusMessage").textContent = "";
        };

        secBox.onchange = function() {
            const newSec = parseInt(secBox.value, 10);
            if (!isNaN(newSec) && newSec >= 0 && newSec <= 59) {
                myTimer.seconds = newSec;
            } else {
                secBox.value = myTimer.seconds;
            }
            document.getElementById("statusMessage").textContent = "";
        };

        runPauseTimer.onclick = function() {
            myTimer.runPause(myTimer, minBox, secBox);
        };