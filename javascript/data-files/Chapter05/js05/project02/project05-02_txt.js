"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Thomas Schulte
      Date:   11/9/25

      Filename: project05-02.js
*/

// Global Variables
const images = document.getElementsByTagName("img");
const photoBucket = document.getElementById("photo_bucket");
const photoList = document.getElementById("photo_list");

// Loop through all images and attach the click event handler
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        // 'this' refers to the clicked image element
        const clickedImage = this;
        const parentElementId = clickedImage.parentElement.id;

        // Determine if the image is in the photo bucket or the photo list
        if (parentElementId === "photo_bucket") {
            // Move image from photo bucket to photo list

            // 1. Create an element node named newItem for the li element
            const newItem = document.createElement("li");

            // 2. Append newItem to the photoList object
            photoList.appendChild(newItem);

            // 3. Append the image (this) to the newItem object
            newItem.appendChild(clickedImage);

        } else {
            // Move image from photo list back to photo bucket

            // 1. Declare a variable named oldItem equal to the parent element of the clicked image (the <li>)
            const oldItem = clickedImage.parentElement;

            // 2. Append the clicked image to photoBucket object
            photoBucket.appendChild(clickedImage);

            // 3. Remove oldItem from the parent element of oldItem (the <ul> #photo_list)
            oldItem.parentElement.removeChild(oldItem);
        }
    };
}