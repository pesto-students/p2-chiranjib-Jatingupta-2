const express = require('express');
const { getWeather,getDetailedWeather } = require('./controller');
const router = express.Router();

router.post('/weather/all', getWeather)

router.post('/weather/detailed/forecast',getDetailedWeather)

module.exports = router