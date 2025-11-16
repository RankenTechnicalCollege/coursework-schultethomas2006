"use strict";

    // function to calculate and display total, tax, and total with tax
    function calcTotal() {
        let itemTotal = 0;
        let tax = 0;
        let totalWithTax = 0;

        let items = document.querySelectorAll("input[type='checkbox']");

        let cells = document.getElementsByTagName("td");

        for (let i = 0; i < items.length; i++) {
            if (items[i].checked) {
                itemTotal += (items[i].value * 1);
            }
        }

        const TAX_RATE = 0.05; // 5% tax
        tax = itemTotal * TAX_RATE;

        totalWithTax = itemTotal + tax;

        cells[1].innerHTML = (itemTotal / 100).toFixed(2);
        cells[3].innerHTML = (tax / 100).toFixed(2);
        cells[5].innerHTML = "$" + (totalWithTax / 100).toFixed(2);

        // --- 4) Clear any checkbox selections after the calculate button has been clicked ---
        for (let i = 0; i < items.length; i++) {
            items[i].checked = false;
        }
    }

    let submitButton = document.getElementById("sButton");
    submitButton.addEventListener("click", calcTotal);


    // Create a new Date object and format it as Sun Nov 16 2025
    // Create a specific Date object for Sun Nov 16 2025
    let dateObject = new Date("November 16, 2025 00:00:00");

    // Formatting the date to "Sun Nov 16 2025"
    let formattedDate = dateObject.toDateString(); // Gives "Sun Nov 16 2025"

    let dateDiv = document.createElement("div");

    dateDiv.textContent = formattedDate;

    // Add a style or class for visibility/formatting
    dateDiv.style.marginTop = "20px";
    dateDiv.style.fontWeight = "bold";

    // Append the new div element to the body element
    document.body.appendChild(dateDiv);