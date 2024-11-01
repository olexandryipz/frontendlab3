const paragraphs = document.querySelectorAll('#paragraphs p');

const charCountArray = [];

paragraphs.forEach((paragraph) => {
    const charCount = paragraph.innerText.length;
    charCountArray.push(charCount);
});

console.log("Масив з кількістю символів у кожному абзаці:", charCountArray);

let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

const minValue = Math.min(...arr);
const maxValue = Math.max(...arr);
console.log("Найменше значення:", minValue);
console.log("Найбільше значення:", maxValue);

let evenCount = 0;
let oddCount = 0;

arr.forEach((num) => {
    if (num % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
});

console.log("Кількість парних чисел:", evenCount);
console.log("Кількість непарних чисел:", oddCount);

let twoDigitCount = arr.filter((num) => num >= 10 && num <= 99 || num <= -10 && num >= -99).length;
console.log("Кількість чисел з двома цифрами:", twoDigitCount);

let positiveCount = 0;
let negativeCount = 0;

arr.forEach((num) => {
    if (num > 0) {
        positiveCount++;
    } else if (num < 0) {
        negativeCount++;
    }
});

console.log("Кількість додатних чисел:", positiveCount);
console.log("Кількість від'ємних чисел:", negativeCount);

let sortedArr = [...arr].sort((a, b) => a - b);
console.log("Масив у порядку зростання:", sortedArr);

let reversedArr = [...arr].reverse();
console.log("Масив у зворотному порядку:", reversedArr);
