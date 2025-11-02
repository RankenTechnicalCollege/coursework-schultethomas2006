// Array to hold the movies, initialized with 3 movies.
const favoriteMovies = ["The Matrix", "Pulp Fiction", "Interstellar"];
const movieListElement = document.getElementById('movieList');
const initialMessage = document.getElementById('initialMessage');

/**
* Clears the list and uses a for loop to print all movies in the array.
*/
function displayMovies() {
    movieListElement.innerHTML = '';

    if (initialMessage) {
        initialMessage.remove(); // Remove placeholder once content exists
    }

    // Use a for loop to print each movie
    for (let i = 0; i < favoriteMovies.length; i++) {
        const movieItem = document.createElement('p');
        movieItem.textContent = `${i + 1}. ${favoriteMovies[i]}`;
        movieItem.classList.add('text-gray-700', 'p-1', 'border-b', 'border-indigo-100');
        movieListElement.appendChild(movieItem);
        }
}


function addMovie() {
    const movieInput = document.getElementById('movieInput');
    const newMovieModal = movieInput.value.trim();

    if (newMovieModal) {
        favoriteMovies.push(newMovieModal);
        movieInput.value = '';
        displayMovies();
    } else {
        // Display error message instead of alert()
        movieListElement.innerHTML = '<p class="text-red-500 font-medium">Please enter a movie title!</p>';
        // Restore list after a short delay
        setTimeout(displayMovies, 2000);
    }
}

// Initialize display on page load
window.onload = displayMovies;