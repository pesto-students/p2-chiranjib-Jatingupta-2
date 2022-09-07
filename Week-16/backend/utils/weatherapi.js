const axios = require('axios').default;

const getWeatherUtils = async (city) => {
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`);

        return response.data
    }
    catch (err) {
        return err.response.data || "Location not found"
    }
}

const getDetailedWeatherUtils = async (city,date) => {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/future.json?key=${process.env.WEATHER_API_KEY}&q=${city}&dt=${date}`);
        return response.data
    }
    catch (err) {
        return err.response.data || "Location not found"
    }
}


module.exports = {
    getWeatherUtils,
    getDetailedWeatherUtils
}