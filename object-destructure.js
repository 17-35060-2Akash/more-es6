const { x, y, ...z } = {
    name: 'Akash',
    comapny: 'google',
    x: 3,
    y: 4,
    z: 5
};

// console.log(x, y, z);

const [a, b, ...c] = [45, 78, 52, 78, 63];
console.log(a, b, c);