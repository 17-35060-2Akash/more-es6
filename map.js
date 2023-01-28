const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }

    return output;
}

function doubleItOld(number) {
    return number * 2;
}

const doubleIt = numbers => numbers * 2;

const makeDouble = numbers.map(doubleIt);
const makeDouble2 = numbers.map(numbers => numbers * 2);

console.log(makeDouble2);