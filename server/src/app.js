// Start
let express = require('express')
let bodyParser = require('body-parser')

// call databse
const {sequelize} = require('./models')

// bodyParser
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})) // rencode เข้ารหัส

// Call route.js
require('./routes')(app)

// * Comment it and move to use in 
// * UserController.js + route.js
// * ใฟ้เป็นระเบียบขึ้น

/*
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

// Original not call sequelize
/* 
app.listen(port, function(){
  console.log('server running on port: ' + port) 
})  
*/