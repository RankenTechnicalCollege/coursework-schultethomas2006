"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Thomas Schulte
      Date: 11/16/25

      Filename: project06-01.js
*/

var submitButton = document.getElementById("submitButton");
var pwd = document.getElementById("pwd");
var pwd2 = document.getElementById("pwd2");

// Add event listener to submitButton
submitButton.addEventListener("click", function() {
    // Prevent default form submission to handle validation first
    if (pwd.validity.patternMismatch) {
        // If the pwd field fails the pattern match
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    } else if (pwd.value !== pwd2.value) {
        // Else if the value of the pwd field does not equal the value of the pwd2
        pwd.setCustomValidity("Your passwords must match");
    } else {
        // Otherwise, set the validation message to an empty text string (i.e., password is valid)
        pwd.setCustomValidity("");
    }
});