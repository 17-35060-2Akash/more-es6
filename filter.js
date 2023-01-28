const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(num => num > 20 && num < 50);
const bigNums2 = numbers.filter(num => num % 2 == 0);
// console.log(bigNums2);

const data = [
    { id: 1, name: 'abul', salary: 10000, job: 'doctor' },
    { id: 2, name: 'Kabul', salary: 20000, job: 'Teacher' },
    { id: 3, name: 'Habul', salary: 30000, job: 'CA' },
    { id: 4, name: 'Babul', salary: 40000, job: 'Terrorist' }
];

// const maxSalary = data.filter(dataFlock => dataFlock.salary > 20000);
const maxSalary = data.find(dataFlock => dataFlock.salary > 20000);
const bigNum = numbers.find(num => num % 2 == 0);

// console.log(maxSalary);
console.log(bigNum);