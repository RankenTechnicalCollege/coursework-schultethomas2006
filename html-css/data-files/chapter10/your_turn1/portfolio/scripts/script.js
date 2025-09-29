/*
    Name: Thomas Schulte
    Date: 09/28/2025
    File Name: script.js
*/

// Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");

    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#111111";
        menuicon.classList.remove("active"); //remove transform
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#ff6600";
        menuicon.classList.add("active"); //apply transform
    }
}
