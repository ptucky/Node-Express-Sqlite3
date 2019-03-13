let express = require('express')
let bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})) // rencode เข้ารหัส


/**
 * Run command in terminal
 * > node src/app.js
 * out put will be "server running on port: 8081"
 */
let port = 8081

app.listen(port, function(){
  console.log('server running on port: ' + port) 
})


/**
 * Open browser 
 * type url http://localhost:8081/status
 * out put will be "Status Nodejs Server"
 */
app.get('/status', function (request, response) {
  response.send('Nodejs server status')
})

// Get - hello
app.get('/hello/:person', function(request, response){
  response.send('Hello ' + request.params.person)
})

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
