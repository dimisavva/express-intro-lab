// import modules

import express from 'express'


// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res){
  res.send('<h1>Sell, sell!</h1>')
})

app.get('/real', function(req, res) {
  res.redirect('/home') //redirect ALWAYS with a slash
  })


app.get('/home', function(req, res){
  res.render('home') //render NEVER with a slash
  })

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})