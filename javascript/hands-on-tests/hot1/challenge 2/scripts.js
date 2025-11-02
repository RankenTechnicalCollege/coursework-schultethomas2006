
function verifyAge() {
    const ageInput = document.getElementById('ageInput');
    const resultMessage = document.getElementById('resultMessage');
    const inputVal = ageInput.value.trim();

    const age = parseInt(inputVal);

    let message = "";
    let bgColor = "bg-green-50";

    // 1. Check if the user entered an integer (handles empty string, non-numeric, and floats)
    // If it's not a number OR if it's a string that couldn't be fully parsed (e.g., "25a")
    if (isNaN(age) || !Number.isInteger(Number(inputVal)) || inputVal === "") {
        message = "Please enter your age!";
        bgColor = "bg-yellow-100 text-yellow-800";
    }
    // 2. Check for age out of range (below 1 or above 200)
    else if (age < 1 || age > 200) {
        message = "Age out of range!";
        bgColor = "bg-red-100 text-red-800";
    }
    // 3. Check for 21 or older
    else if (age >= 21) {
        message = "Welcome to the venue!";
        bgColor = "bg-green-100 text-green-800";
    }
    // 4. Check for under 21 (the remaining valid case)
    else {
        message = "You're not old enough!";
        bgColor = "bg-red-100 text-red-800";
    }

    // Update the result message element
    resultMessage.className = `min-h-[50px] p-4 rounded-lg border border-gray-300 font-medium text-center ${bgColor}`;
    resultMessage.textContent = message;
}