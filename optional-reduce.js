let numbers = [1, 9, 17, 22];

const reduceElements = numbers.reduce((previous, current) => (previous + current), 0);
console.log(reduceElements);

// with for loop 

let initial = 0;
let previous = initial;
let current;

for (let i = 0; i < numbers.length; i++) {
    if (previous == 0) {
        current = numbers[i];
        console.log(`${previous}  ${current}`);
        previous = previous + current;

    }
    else if (i < numbers.length) {

        current = numbers[i];
        console.log(`${previous}  ${current}`);
        previous = previous + current;

    }

}
console.log(previous);

