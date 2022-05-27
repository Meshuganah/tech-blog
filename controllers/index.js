const router = require('express').Router();
const apiRoutes = require('./api');
//TODO add routes to connect front end to server

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;