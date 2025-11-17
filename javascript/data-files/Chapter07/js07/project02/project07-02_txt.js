"use strict";
/* JavaScript 7th Edition
	Chapter 7
	Project 07-02

	Project to deal cards from a shuffled poker deck
	Author: Thomas Schulte
	Date: 	11/16/25

	Filename: project07-02.js
*/

let deckStr = `Ace of Hearts, King of Hearts, Queeen of Hearts, Jack of Hearts,
			 	10 of Hearts, 9 of Hearts, 8 of Hearts, 7 of Hearts, 6 of Hearts,
			 	5 of Hearts, 4 of Hearts, 3 of Hearts, 2 of Hearts,
			 	Ace of Spades, King of Spades, Queeen of Spades, Jack of Spades,
			 	10 of Spades, 9 of Spades, 8 of Spades, 7 of Spades, 6 of Spades,
			 	5 of Spades, 4 of Spades, 3 of Spades, 2 of Spades,
			 	Ace of Diamonds, King of Diamonds, Queeen of Diamonds, Jack of Diamonds,
			 	10 of Diamonds, 9 of Diamonds, 8 of Diamonds, 7 of Diamonds, 6 of Diamonds,
			 	5 of Diamonds, 4 of Diamonds, 3 of Diamonds, 2 of Diamonds,
			 	Ace of Clubs, King of Clubs, Queeen of Clubs, Jack of Clubs,
			 	10 of Clubs, 9 of Clubs, 8 of Clubs, 7 of Clubs, 6 of Clubs,
			 	5 of Clubs, 4 of Clubs, 3 of Clubs, 2 of Clubs`;

let cards = document.querySelectorAll("div#hand span");
let cardsLeft = document.getElementById("cardsLeft");
let deck = [];

// Function to generate a new shuffled deck
function newDeck() {
    // 1. Split deckStr at each "," and store in the deck array
    deck = deckStr.split(',');

    // Trim whitespace from each card name
    for (let i = 0; i < deck.length; i++) {
        deck[i] = deck[i].trim();
    }

    // 2. Sort the contents of the deck array using the shuffle() function
    deck.sort(shuffle);
}

// Function to randomly shuffle the array
function shuffle(a, b) {
    // Return a random number between -0.5 and 0.5 to shuffle the array randomly
    return 0.5 - Math.random();
}

// Initial deck creation when the script loads
newDeck();


document.getElementById("deal").onclick = function() {
    // Loop through the five card span elements in the 'cards' node list
    for (let i = 0; i < cards.length; i++) {
        // Step 4a: If the deck is empty, create a new one
        if (deck.length === 0) {
            newDeck();
        }

        // Step 4b: Remove the last item from the deck array (the 'dealt' card)
        // and set it as the text content of the current card span element.
        cards[i].textContent = deck.pop();
    }

    // Step 5: Update the 'Cards left' display
    cardsLeft.textContent = deck.length;
}