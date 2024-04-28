const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

//Where to import the controllers we will route
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
});

//Define route for trips endpoint
router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList) //GET method routes tripList
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) //GET method requires parameter
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;