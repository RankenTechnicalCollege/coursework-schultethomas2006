"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming
      Author: Thomas Schulte
      Date:   11/23/25

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/

// Create the cart object literal
let cart = {
    items: [],
    addItem: function (foodItem) {
        this.items.push(foodItem);
    }
};

// Constructor function for the Pizza object class
function Pizza() {
    this.size;
    this.crust;
    this.toppings = [];
}

// Method to add a Topping object to the Pizza's toppings array
Pizza.prototype.addTopping = function (topping) {
    this.toppings.push(topping);
};

// Add the addToCart method to the Pizza prototype
Pizza.prototype.addToCart = function (cart) {
    cart.addItem(this);
};

// Add the summarize() method to the Pizza prototype
Pizza.prototype.summarize = function () {
    // Declare a variable named summary with the initial value “Pizza: “
    let summary = "Pizza: ";

    // Add the value of this.size and this.crust
    summary += this.size + " " + this.crust;

    // Iterate through the this.toppings array
    for (let i = 0; i < this.toppings.length; i++) {
        // Add the text string name (side)
        summary += ", " + this.toppings[i].name + " (" + this.toppings[i].side + ")";
    }

    // Return the value of the summary variable
    return summary;
};

// Constructor function for the Topping object class
function Topping() {
    this.name;
    this.side;
}

/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");
let pizzaSizeBox = document.getElementById("pizzaSize");
let pizzaCrustBox = document.getElementById("pizzaCrust");
let toppingOptions = document.querySelectorAll("input.topping");
let addToCart = document.getElementById("addToCart");
let cartBox = document.getElementById("cart");


// Add event handlers for the pizza toppings
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
}

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
   pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);
      }
   }
}


// Function to build the pizza
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked");

    // Create an instance of a Pizza object
    let myPizza = new Pizza();

    // Set size and crust
    myPizza.size = pizzaSizeBox.value;
    myPizza.crust = pizzaCrustBox.value;

    // Add the selected toppings
    for (let i = 0; i < checkedToppings.length; i++) {
        // Only include toppings that are NOT "none"
        if (checkedToppings[i].value !== "none") {
            let myTopping = new Topping();
            myTopping.name = checkedToppings[i].name;
            myTopping.side = checkedToppings[i].value;
            // The method is named 'addTopping' in the Pizza prototype implementation above
            myPizza.addTopping(myTopping);
        }
    }

    // Return the value of myPizza
    return myPizza;
}

// Function to add the built pizza to the shopping cart
function updateCart() {
    // Run the buildPizza() function, storing the result in the myPizza variable
    let myPizza = buildPizza();

    // Apply the addItem(myPizza) method to the cart object.
    cart.addItem(myPizza);

    // Run the console.log(cart) method to write the contents of the cart object to the debugger console.
    console.log(cart);

    // Create a paragraph element containing the value of summarize(myPizza).
    let pizzaSummary = document.createElement("p");
    // Use the summarize() method from the Pizza prototype
    pizzaSummary.textContent = myPizza.summarize();

    // Use the appendChild() method to append the paragraph to the cartBox element.
    cartBox.appendChild(pizzaSummary);

    // Reset the page for the next pizza
    clearPizzaImage();
    clearToppings();
}