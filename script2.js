function displayResult(text) {
    const outputDiv = document.getElementById('output');
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    outputDiv.appendChild(paragraph);
}

const N = 7;
const M = 5;
let matrix = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Math.floor(Math.random() * 21) - 10)
);

displayResult("Матриця:");
console.table(matrix);
matrix.forEach(row => displayResult(row.join(' ')));

let positiveCount = 0;
matrix.forEach(row => {
    row.forEach(num => {
        if (num > 0) positiveCount++;
    });
});
displayResult("Кількість додатних елементів: " + positiveCount);

let noZeroRowCount = matrix.filter(row => !row.includes(0)).length;
displayResult("Кількість рядків без жодного нульового елемента: " + noZeroRowCount);

let zeroColumnCount = 0;
for (let col = 0; col < M; col++) {
    if (matrix.some(row => row[col] === 0)) zeroColumnCount++;
}
displayResult("Кількість стовпців з хоча б одним нульовим елементом: " + zeroColumnCount);

let maxSeriesLength = 0;
let maxSeriesRow = -1;
matrix.forEach((row, rowIndex) => {
    let currentSeriesLength = 1;
    for (let i = 1; i < row.length; i++) {
        if (row[i] === row[i - 1]) {
            currentSeriesLength++;
        } else {
            currentSeriesLength = 1;
        }
        if (currentSeriesLength > maxSeriesLength) {
            maxSeriesLength = currentSeriesLength;
            maxSeriesRow = rowIndex;
        }
    }
});
displayResult("Номер рядка з найдовшою серією однакових елементів: " + (maxSeriesRow + 1));

let productOfRowsWithoutNegatives = [];
matrix.forEach(row => {
    if (row.every(num => num >= 0)) {
        const product = row.reduce((acc, num) => acc * num, 1);
        productOfRowsWithoutNegatives.push(product);
    }
});
displayResult("Добуток елементів у рядках без від’ємних елементів: " + productOfRowsWithoutNegatives.join(', '));

let sumOfColumnsWithoutNegatives = [];
for (let col = 0; col < M; col++) {
    let columnElements = matrix.map(row => row[col]);
    if (columnElements.every(num => num >= 0)) {
        const sum = columnElements.reduce((acc, num) => acc + num, 0);
        sumOfColumnsWithoutNegatives.push(sum);
    }
}
displayResult("Сума елементів у стовпцях без від’ємних елементів: " + sumOfColumnsWithoutNegatives.join(', '));

let sumOfColumnsWithNegatives = [];
for (let col = 0; col < M; col++) {
    let columnElements = matrix.map(row => row[col]);
    if (columnElements.some(num => num < 0)) {
        const sum = columnElements.reduce((acc, num) => acc + num, 0);
        sumOfColumnsWithNegatives.push(sum);
    }
}
displayResult("Сума елементів у стовпцях з хоча б одним від’ємним елементом: " + sumOfColumnsWithNegatives.join(', '));

let transposedMatrix = Array.from({ length: M }, (_, col) =>
    Array.from({ length: N }, (_, row) => matrix[row][col])
);
displayResult("Транспонована матриця:");
transposedMatrix.forEach(row => displayResult(row.join(' ')));
