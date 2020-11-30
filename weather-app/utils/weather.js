const request = require('postman-request')

const weather = (latitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=97bf2ecaaed2dab969a3614946a09115&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f'

request({
    url,
    json:true
}, (error, {body})=>{
    if(error){
        callback('cannot reach weather api', undefined)
    }else if(body.error){
        callback('Something went wrong :' + response.body.error.info, undefined)
    } else{
        callback(undefined, {
            weather_description: body.current.weather_descriptions[0],
            temperature: body.current.temperature,
            feelslike: body.current.feelslike
        })
    }
})
}

module.exports = weather