const path = require('path')
const express = require('express')
//instantiating expres
const app = express()

const publicFolder = path.join(__dirname,'../public') // up one folder and to the public folder

app.use(express.static(publicFolder))

app.set('view engine', 'hbs') // telling express to use the hbs- handlebars
app.get('', (req, res)=>{
        res.render('index', // name needs to match the file in views folder but doesn't need exptension so this refering to index.hbs
        {
            title:'weather application',
            name: 'myname'
        }) 
     })

     app.get('/about',(req,res)=>{
         res.render('about',{
             title:'About Page',
             name: 'AS'
         })

     })

     app.get('/help',(req,res)=>{
        res.render('help',{
            title:'Help Page',
            message: 'The very useful and helpful message'
        })

    })

//setting up routes
//base route is empty string 
//However, this is no longer rendered as we have added the express static above 
//  app.get('', (req, res)=>{
//     res.send('<h1>Hello Express</h1>')
//  })

//  app.get('/help', (req, res)=>{
//     res.send({
//         status:"up"
//     })
//  })

//  app.get('/about', (req, res)=>{
//     res.send('<h1>About Page</h1>')
//  })



 app.get('/weather', (req, res)=>{
    res.send({
        location:"My location",
        forecast: "my forecast" 
    })
 })

 //starting up express and listening on a specific port
 app.listen(3000, ()=>{
     console.log('server started on port 3000')
 })