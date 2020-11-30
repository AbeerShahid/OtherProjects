const request = require('postman-request')



const geocode  = function (address, callback){
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2hhaGlkYTEiLCJhIjoiY2toa2d1Nmx6MDZrcDJ5b3lvMDFoZ3hydSJ9.xGkSuF3qFyBOvW6Y_9FUVg&limit=1'
    request({
        url,
        json:true
    }, (error, {body})=>{
        if(error){
            callback('unable to connect to location service', undefined)
        }else if(body.features.length===0){
            callback('Unable to find location, try another search', undefined )
        } else{
            callback(undefined, {
                place_name : body.features[0].place_name,
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1]
            })
        }
    }
    )
}

module.exports = geocode