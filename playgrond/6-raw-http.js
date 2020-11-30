const http = require('http')


const url = 'http://api.weatherstack.com/current?access_key=97bf2ecaaed2dab969a3614946a09115&query=37.8267,-122.4233&units=f'

const request = http.request(url, (response)=>{
    let data = ''
    response.on('data', (chunk)=>{
        data += chunk.toString()
    })
    response.on('end', ()=>{
        const body = JSON.parse(data)
       console.log(body) 
    })

    response.on('error', (error)=>{
       console.log('an error occured', error) 
    })
})

request.end()