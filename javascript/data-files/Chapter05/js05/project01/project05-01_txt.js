"use strict";
/* JavaScript 7th Edition
	  Chapter 5
	  Project 05-01

	  Project to present an online quiz with a countdown clock
	  Author: Thomas Schulte
	  Date: 	11/9/25

	  Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID; // Declares the timeID variable
let questionList = document.querySelectorAll("div#quiz input"); // Declares questionList and stores the node list

// Add an onclick event handler to startQuiz
startQuiz.onclick = function() {
    overlay.className = "showquiz"; // Set overlay class to "showquiz"
    timeID = setInterval(countdown, 1000); // Repeat countdown() every 1 second and store the ID
};

/*------------- Function to update the quiz clock ----------------*/
function countdown() {
    if (timeLeft === 0) {
        // If time is up (timeLeft is 0)
        clearInterval(timeID); // Cancel the timed command
        let totalCorrect = checkAnswers(); // Get the number of correct answers

        if (totalCorrect === correctAnswers.length) {
            // All answers are correct
            alert("Congratulations! You got 100%!");
        } else {
            // Some answers are incorrect
            let totalQuestions = correctAnswers.length;
            let incorrectCount = totalQuestions - totalCorrect;
            alert("You got " + incorrectCount + " incorrect answers out of " + totalQuestions + " questions.");
        }

        timeLeft = quizTime; // Reset timeLeft to the initial quiz time
        quizClock.value = timeLeft; // Reset the displayed clock value
        overlay.className = "hidequiz"; // Change overlay class to "hidequiz"
    } else {
        // If time is not up
        timeLeft--; // Decrease timeLeft by 1
        quizClock.value = timeLeft; // Update the displayed clock value
    }
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
    let correctCount = 0;

    for (let i = 0; i < questionList.length; i++) {
        if (questionList[i].value === correctAnswers[i]) {
            correctCount++;
            questionList[i].className = "";
        } else {
            questionList[i].className = "wronganswer";
        }
    }
    return correctCount;
}