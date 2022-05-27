
const { User } = require('../models');

const userData = [
    {
        username: 'test_user',
        email: 'testuser@mail.com',
        password: '1234'
    },
    {
        username: 'testingAgain',
        email:'fakemail@mail.com',
        password: '12345'
    },
    {
        username: 'fakeUser12',
        email: 'user@mail.com',
        password: 'bannock'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;