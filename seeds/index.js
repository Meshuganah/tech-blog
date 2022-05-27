const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');


const sequelize = require('../config/connection');

const seed = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    console.log('Users seeded');

    await seedPosts();
    console.log('Posts seeded');

    await seedComments();
    console.log('Comments seeded');
    console.log('ALL TABLES SEEDED');

    process.exit(0);
};

seed();