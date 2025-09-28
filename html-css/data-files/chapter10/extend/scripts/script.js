/*
    Student Name: Thomas Schulte
    File Name: script.js
    Date: 9/28/2025
*/

$(document).ready(function() {
    // Hide paragraphs when "Hide" button is clicked
    $("button:contains('Hide')").click(function() {
        $("#main p").hide();
    });

    // Show paragraphs when "Show" button is clicked
    $("button:contains('Show')").click(function() {
        $("#main p").show();
    });
});
