const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const halfArr = numbers.map(x => x / 2);
// console.log(halfArr);

/* const friends = ['Akash', 'Batash', 'Aurna', 'Heeme'];
const firstLetters = friends.map(f => f[0]);
console.log(firstLetters); */

const friends = ['Akash', 'Batash', 'Aurna', 'Heeme'];
const firstLetters = friends.map(f => f.length);
// console.log(firstLetters);

const data = [
    { id: 1, name: 'abul', job: 'doctor' },
    { id: 2, name: 'Kabul', job: 'Teacher' },
    { id: 3, name: 'Habul', job: 'CA' },
    { id: 4, name: 'Babul', job: 'Terrorist' }
]

const occupations = data.map(data => data.job);
console.log(occupations);


