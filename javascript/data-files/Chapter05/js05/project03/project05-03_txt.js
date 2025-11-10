"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Thomas Schulte
      Date:   11/9/25

      Filename: project05-03.js
*/

// Declare variables and constant
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

// Create a for loop to iterate through the child elements of sourceDoc
for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
    // Check if the element is an H2 heading
    if (n.nodeName === heading) {
        // Create an anchor element and set its name attribute
        let anchor = document.createElement("a");
        anchor.name = "doclink" + headingCount;

        // Insert the anchor before the first child of the heading element (n)
        n.insertBefore(anchor, n.firstChild);

        // Create the list item and link for the Table of Contents
        let listItem = document.createElement("li");
        let link = document.createElement("a");

        // Append the link to the list item
        listItem.appendChild(link);

        // Set the text content of the link to the heading's text content
        link.textContent = n.textContent;

        // Set the href property of the link to point to the newly created anchor
        // NOTE: The href should be set on the <a> element (link), not the <li> element (listItem)
        link.href = "#doclink" + headingCount;

        // Append the new list item to the table of contents (toc)
        toc.appendChild(listItem);

        // Increase the heading count for the next iteration
        headingCount = headingCount + 1;
    }
}