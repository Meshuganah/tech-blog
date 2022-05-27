const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 2,
        post_id: 2
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;