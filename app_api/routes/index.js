const express = require('express');
const router = express.Router();

//Where to import the controllers we will route
const tripsController = require('../controllers/trips');

//Define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) //GET method routes tripList
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) //GET method requires parameter
    .put(tripsController.tripsUpdateTrip);

module.exports = router;