**Tech-Blog

*Project Description

A full stack web application where users can register and create blog posts for others to see.

*Installation instructions

npm i

Will install the necessary modules, mysql2, sequelize, dotenv, express, bcrypt, connect-session-sequelize, express-handlebars, express-session.

*Usage Information

Users may access the live application via a link below, where they may create an account with the app (email and username are used purely for log in purposes). They may then navigate to the dashboard where they can create posts and edit posts. From the homepage they may see posts left on the site by other users, and comment on them if they wish.

For testing purposes a seed file has currently been left in the project, which users may run from a terminal. They cannot however use the test accounts to log onto the site, as these test users have not had their passwords encrypted, and will not match what the database is comparing when logging users in. 

https://dashboard.heroku.com/apps/mysterious-bayou-64063