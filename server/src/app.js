// Start
let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')                        // call CORS package
const {sequelize} = require('./models')           // call databse

// bodyParser
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))  // rencode เข้ารหัส
app.use(cors())

// Call routes.js (src/routes.js)
require('./routes')(app)

// type url http://localhost:8081/status
app.get('/status', function (request, response) {
  response.send('Nodejs server status')
})

// Get - hello
app.get('/hello/:person', function(request, response){
  response.send('Hello ' + request.params.person)
})

// Get - hello
app.get('/hello', function(request, response){
  response.send('OK Hello ')
})

/*
  // * Comment it and move to use in 
  // * UserController.js + route.js
  // * ให้เป็นระเบียบขึ้น

  // Get - user by id
  app.get('/user/:userId', function(request, response){
    response.send('Show user by id: ' + request.params.userId)
  })

  // Get - all user
  app.get('/users', function(request, response){
    response.send('Show all User')
  })

  // JSON.stringify คือ การแปล JSON ให้เป็น String

  // Create - user
  app.post('/user/', function (request, response) {
    response.send('Create user: ' + JSON.stringify(request.body))
  })

  // Edit - user
  app.put('/user/:userId', function (request, response) {
    response.send('Edit user: ' + request.params.userId + ' : ' + JSON.stringify(request.body))
  })

  // Delete - user
  app.delete('/user/:userId', function (request, response) {
    response.send('Delete user: ' + request.params.userId)
  })
*/


/**
 * Run command in terminal
 * > node src/app.js
 */
let port = 8081

// call sequelize
sequelize.sync({force: false}).then(() => {
  app.listen(port, function() {
    console.log('server running on port: ' + port) 
  })
})

// Original not use call sequelize
/* 
app.listen(port, function(){
  console.log('server running on port: ' + port) 
})  
*/