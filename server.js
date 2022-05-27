const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
//Imports helper methods
//Uncomment if helper methods are created/used, remove if not (as long as app is still functioning)
//const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

//Imports handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

//Session storage import
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

//Sets up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
//Turn on routes
app.use(routes);


//Turn on connection to db and server
sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});