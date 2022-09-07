const { getWeatherUtils, getDetailedWeatherUtils } = require("./utils/weatherapi")


const getWeather = async (req, res) => {
    try {

        const { cities, skip, limit } = req.body
       
        if(!cities||cities.length<0){
            res.json({error:"Must have more than 1 city"})
            return;
        }
        
        if(skip === undefined || !limit){
            res.json({error:"Must provide integer skip and limit"})
            return;
        }

        let response = []
        let filteredCities = cities.filter((city, index) => index >= skip && index < (skip + limit))

        for (let city of filteredCities) {
            response.push(await getWeatherUtils(city))
        }

        res.json(response)


    }
    catch (err) {

        res.json(err)
    }

}

const getDetailedWeather = async (req, res) => {
    try {
       
        const { city,date } = req.body
         if(!city){
            res.json({error:"Must have city"})
        }
        if(!date){
            res.json({error:"Must provide date"})
        }
        res.json(await getDetailedWeatherUtils(city,date))
    }
    catch(err){
        res.json(err)
    }
}

module.exports = {
    getWeather,
    getDetailedWeather
}

