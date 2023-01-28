const numbers = [1, 3, 5, 7, 9];

const convertToEvenArray = numbers.map(number => number + 1);
console.log(convertToEvenArray);
// -----------------
let newArr = [];
for (let i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i] + 1);
}
console.log(newArr);
