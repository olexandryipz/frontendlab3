const tables = document.querySelectorAll('.table');

tables.forEach((tableDiv) => {
    const tableCells = tableDiv.querySelectorAll('td');

    tableCells.forEach((cell, index) => {
        if ((index + 1) % 2 === 0) {
            cell.classList.add('selected');
        }
    });
});
