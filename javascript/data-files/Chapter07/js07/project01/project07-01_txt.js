"use strict";
/* JavaScript 7th Edition
       Chapter 7
       Project 07-01

       Project to validate a form used for setting up a new account
       Author: Thomas Schulte
       Date:   11/16/25

       Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

// Variables for regular expressions
let regex1 = /[A-Z]/;      // Matches any uppercase letter
let regex2 = /[0-9]/;      // Matches any single digit
let regex3 = /[!\$#%]/;    // Matches one of the symbols: !, $, #, % (Note: $ must be escaped)


signupForm.addEventListener("submit", function(e) {
    // Prevent the default form submission
    e.preventDefault();

    let pwd = document.getElementById("pwd").value;
    let feedback = document.getElementById("feedback");

    // Check password length and regular expression tests
    if (pwd.length < 8) {
        feedback.textContent = "Your password must be at least 8 characters.";
    } else if (regex1.test(pwd) === false) {
        feedback.textContent = "Your password must include an uppercase letter.";
    } else if (regex2.test(pwd) === false) {
        feedback.textContent = "Your password must include a number.";
    } else if (regex3.test(pwd) === false) {
        feedback.textContent = "Your password must include one of the following: !$#%";
    } else {
        // If all conditions pass, submit the form
        signupForm.submit();
    }
}
);