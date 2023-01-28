const data = [
    { id: 1, name: 'abul', salary: 10000, job: 'doctor' },
    { id: 2, name: 'Kabul', salary: 20000, job: 'Teacher' },
    { id: 3, name: 'Habul', salary: 30000, job: 'CA' },
    { id: 4, name: 'Babul', salary: 40000, job: 'Terrorist' }
];


const friends = ['Akash', 'Batash', 'Aurna', 'Heeme'];

friends.forEach(friend => console.log(friend));

data.forEach(dataflock => {
    console.log(`ID: ${dataflock.id} ,name: ${dataflock.name} gets 100 tk bonous for Eid and Total Salary is: ${dataflock.salary + 100} `)
});

