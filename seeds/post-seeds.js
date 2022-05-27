const { Post } = require('../models');

const postData = [
    {
        title: 'Test Post 1',
        text_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque vitae tempus. Amet consectetur adipiscing elit duis tristique sollicitudin. Porttitor lacus luctus accumsan tortor posuere.',
        user_id: 3
    },
    {
        title: 'Best Test Post',
        text_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum. Sed risus ultricies tristique nulla aliquet enim tortor at. Fringilla urna porttitor rhoncus dolor purus non.',
        user_id: 2
    },
    {
        title: 'Equally Great Test Post',
        text_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Faucibus vitae aliquet nec ullamcorper. Est ante in nibh mauris cursus.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;