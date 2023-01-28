class Instructor {
    name;
    designation = 'Web Developer';
    team = 'PH';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    startSupportSession(time) {
        console.log(`Start session at ${time}`);
    }
    createQuiz(module) {
        console.log(`Create Quiz on ${module}`);
    }
}

const akash = new Instructor('Akash', 'Jashore');
akash.startSupportSession('2.55');

console.log(akash);