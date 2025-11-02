
function displayLyric() {
    const numberInput = document.getElementById('numberInput');
    const lyricOutput = document.getElementById('lyricOutput');
    const inputVal = numberInput.value.trim();

    let message = "";
    let bgColor = "bg-teal-50";

    if (isNaN(Number(inputVal)) && inputVal !== "") {
        message = "Please enter a number, not a word.";
        bgColor = "bg-red-100 text-red-800";
    }
    else if (inputVal === "") {
        message = "Please enter a value.";
        bgColor = "bg-yellow-100 text-yellow-800";
    }
    else {
        const num = Number(inputVal);

        switch (num) {
            case 1:
                message = "One is the loneliest number that you'll ever do.";
                bgColor = "bg-teal-100 text-teal-800";
                break;
            case 2:
                message = "Two can be as bad as one. It's the loneliest number since the number one.";
                bgColor = "bg-teal-100 text-teal-800";
                break;
            case 3:
                 message = "There is no three.";
                bgColor = "bg-teal-100 text-teal-800";
                break;
            default:
                message = "You didn't enter a valid number.";
                bgColor = "bg-yellow-100 text-yellow-800";
                break;
        }
    }

    lyricOutput.className = `min-h-[50px] p-4 rounded-lg border border-gray-300 font-medium text-center italic ${bgColor}`;
    lyricOutput.textContent = message;
}