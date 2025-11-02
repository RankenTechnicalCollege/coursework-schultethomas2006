function printMultiples() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    const targetMultiple = 15;
    let multiplesHTML = '';


    for (let i = 1; i <= 100; i++) {
        if (i % targetMultiple === 0) {
            multiplesHTML += `<span class="bg-purple-200 p-2 rounded-lg shadow-sm">${i}</span>`;
        }
    }


    outputDiv.innerHTML = multiplesHTML;

    if (multiplesHTML === '') {
        outputDiv.textContent = 'No multiples found in range.';
    }
}