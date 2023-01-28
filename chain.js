const users = [
    { id: 1, name: 'abul', job: 'doctor' }
];

/* for (const user of users) {
    if (user.id == 1) {
        console.log(user.name);
    }
} */

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'abul', job: 'doctor' },
        { id: 2, name: 'Kabul', job: 'Teacher' }
    ]
}

const firstJob = data.data[0].job;

const user = {
    id: 5001,
    name: 'Edison',
    address: {
        street: {
            first: '35/A kochukhet Lane',
            second: 'third floor',
            third: 'right side'

        },
        postOffice: 'Cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address.stret?.second;
console.log(userFloor);
