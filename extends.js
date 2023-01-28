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
    provideFeedBack() {
        console.log(`${this.name} thank you for your feedback`);
    }
}