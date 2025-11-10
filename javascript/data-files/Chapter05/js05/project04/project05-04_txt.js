"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Thomas Schulte
      Date:   11/9/25

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");


// Loop through all phrases and attach an onclick event handler
for (let i = 0; i < phrases.length; i++) {
  phrases[i].onclick = function() {
    // 1. Create the phrase variable (h1)
    let phrase = document.createElement("h1");
    // Set text content to the clicked dfn element's text
    phrase.textContent = this.textContent; // 'this' refers to the clicked phrases[i] dfn element

    // 2. Create the footnote variable (p)
    let footnote = document.createElement("p");
    // Set text content to the corresponding item in the footnotes array
    footnote.textContent = footnotes[i];
    // Apply style rules
    footnote.style.fontStyle = "italic";
    footnote.style.fontSize = "1.2em";

    // 3. Create the closeButton variable (input type="button")
    let closeButton = document.createElement("input");
    // Set type and value attributes
    closeButton.type = "button";
    closeButton.value = "Close Footnote";
    // Apply style rules
    closeButton.style.display = "block";
    closeButton.style.margin = "10px auto";

    // 4. Use window.open() to create a popup window
    let popup = window.open("", "footnote", "width=300,height=200,top=100,left=100");

    // 5. Apply style rule to the popup's body
    popup.document.body.style.backgroundColor = "ivory";
    popup.document.body.style.fontSize = "16px";
    popup.document.body.style.padding = "10px";

    // 6. Append the elements to popup.document.body
    popup.document.body.appendChild(phrase);
    popup.document.body.appendChild(footnote);
    popup.document.body.appendChild(closeButton);

    // 7. Add onclick event handler to closeButton
    closeButton.onclick = function() {
      popup.close(); // Close the popup window
    };
  };
}