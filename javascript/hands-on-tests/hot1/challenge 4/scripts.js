function printOddNumbers() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    let oddNumbersHTML = '';

    for (let i = 1; i <= 100; i += 2) {
        oddNumbersHTML += `<span class="p-1">${i}</span>`;
    }

    outputDiv.innerHTML = oddNumbersHTML;
    outputDiv.classList.remove('text-center');
}
