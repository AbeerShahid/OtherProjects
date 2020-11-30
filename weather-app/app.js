
const weather = require('./utils/weather.js')
const geocode = require('./utils/geocode.js')


const location = process.argv[2]
if(location){
    geocode(location, (error, {place_name,latitude, longitude}={})=>{
    if(error) {
        console.log(error)
        }else {
        console.log("%s : %s %s", place_name, latitude, longitude)
        weather(latitude, longitude, (weatherError, {weather_description,temperature, feelslike}={})=>{
            if(weatherError){
                console.log(weatherError)
            } else {
                console.log("%s . It is currently %s farenheit but it feels like %s", 
                weather_description, temperature, feelslike)
            }

        })
        }
    })
} else {
    console.log("please provide a location")
}
