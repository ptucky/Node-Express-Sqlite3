const UserController = require('./controllers/UserController')

module.exports = (app) => {
  // Create - user
  app.post('/user', UserController.create)

  // Edit - user
  app.put('/user/:userId', UserController.put)

  // Delete - user
  app.delete('/user/:userId', UserController.remove)

  // Get - all user
  app.get('/users', UserController.index)

  // Get - user by id
  app.get('/user/:userId', UserController.showId)

}
