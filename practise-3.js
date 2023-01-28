const numbers = [33, 50, 79, 78, 90, 101, 30];

const isDevisable = numbers.find(number => number % 10 == 0);
console.log(isDevisable);