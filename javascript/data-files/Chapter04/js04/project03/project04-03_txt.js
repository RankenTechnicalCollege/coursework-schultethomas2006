/* JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Thomas Schulte
      Date: 11/09/2025

      Filename: project04-03.js
*/

// Strict mode
"use strict";

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
    // Set the warning box to an empty text string
    warningBox.innerHTML = "";

    // Count the number of characters in the comment box
    let commentText = document.getElementById("comment").value;
    let charCount = countCharacters(commentText);

    // Insert the try...catch...finally statement
    try {
        // Within the try statement, test if charCount is greater than MAX_REVIEW
        if (charCount > MAX_REVIEW) {
            throw new Error("You have exceeded the character count limit");
        }
    }
    catch (error) {
        // For caught exceptions, display the error message
        warningBox.innerHTML = error.message;
    }
    finally {
        // Whether the exception is thrown or not, change the innerHTML of wordCountBox
        wordCountBox.innerHTML = charCount;
    }
}









/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
    var commentregx = /\s/g;
    var chars = textStr.replace(commentregx, "");
    return chars.length;
}