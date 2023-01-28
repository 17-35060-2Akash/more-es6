const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchitra', age: 22 }
];

const ages = people.map(people => people.age);
const agesSum = ages.reduce((previous, current) => (previous + current), 0);
console.log(agesSum);