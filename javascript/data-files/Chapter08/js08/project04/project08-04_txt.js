"use strict";
/* JavaScript 7th Edition
	Chapter 8
	Project 08-04

	Retrieve Staff Data from a JSON File
	Author: Thomas Schulte
	Date: 	11/23/25

	Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
	// Retrieve information about the selected file
	let JSONfile = this.files[0];

	// Read the contents of the selected file
	let fr = new FileReader();
	fr.readAsText(JSONfile);

	fr.onload=function(){
        // Add a command to convert the contents of the JSON data into an object named staff.
        let staff = JSON.parse(fr.result);

        // Call the makeStaffTable() function using staff as the value.
        makeStaffTable(staff);
	}

};

function makeStaffTable(staff) {
	let staffTable = document.createElement("table");
	let headerRow = document.createElement("tr");

    // 1. Create a table row containing the property names
    // Loop through the properties of the first directory entry
    for (let prop in staff.directory[0]) {
        // Create a th element named headerCell
        let headerCell = document.createElement("th");

        // Store prop as the text content of headerCell
        headerCell.textContent = prop;

        // Append headerCell to the headerRow object
        headerRow.appendChild(headerCell);
    }

    // Append headerRow to the staffTable object
    staffTable.appendChild(headerRow);

    // 2. Create table rows containing the property values
    // Loop through the items of staff.directory
    for (let i = 0; i < staff.directory.length; i++) {
        // Create an element node for the tr element and store it in the tableRow variable
        let tableRow = document.createElement("tr");

        // Create a for in loop for the properties listed in the staff.directory[i]
        for (let prop in staff.directory[i]) {
            // Create an element node for the td element and store it in the tableCell variable
            let tableCell = document.createElement("td");

            // Store the value of staff.directory[i][prop] as the text content of tableCell
            tableCell.textContent = staff.directory[i][prop];

            // Append tableCell to the tableRow object
            tableRow.appendChild(tableCell);
        }

        // Append tableRow to the staffTable object
        staffTable.appendChild(tableRow);
    }

    // 3. Append staffTable to the containerBox object
    containerBox.appendChild(staffTable);
}