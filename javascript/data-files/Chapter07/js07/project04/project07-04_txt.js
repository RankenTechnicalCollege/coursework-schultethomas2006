"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Thomas Schulte
      Date: 11/16/25

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan", "Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

function generateCustomerList() {
    customerList.innerHTML = "";
    for (let i = 0; i < customers.length; i++) {
        let customerItem = document.createElement("li");
        customerItem.textContent = customers[i];
        customerList.appendChild(customerItem);
    }
}


addButton.onclick = function() {
    let customer = customerName.value;
    customers.push(customer);
    generateCustomerList();
    status.textContent = customer + " added to the end of the queue";
}


searchButton.onclick = function() {
    let customer = customerName.value;

    let index = customers.indexOf(customer);

    let place = index + 1;

    if (place === 0) {

        status.textContent = customer + " is not found in the queue";
    } else {
        status.textContent = customer + " found in position " + place + " of the queue";
    }
}

removeButton.onclick = function() {
    let customer = customerName.value;
    let index = customers.indexOf(customer);

    if (index !== -1) {
        customers.splice(index, 1);
        status.textContent = customer + " removed from the queue";
        generateCustomerList();
    } else {
        status.textContent = customer + " is not found in the queue";
    }
}


topButton.onclick = function() {
    let topCustomer = customers.shift();

    if (topCustomer) {
        status.textContent = topCustomer + " removed from the top of the queue";
        generateCustomerList();
    } else {
        status.textContent = "The queue is currently empty.";
    }
}