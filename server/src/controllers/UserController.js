module.exports = {
  // Get - user by id
  showId (request, response){
    response.send('Show user by id: ' + request.params.userId)
  },

  // Get - all user
  index (request, response){
    response.send('Show all User')
  },
  
  // Create - user
  create (request, response) {
    response.send('Create user: ' + JSON.stringify(request.body))
  },

  // Edit - user, suspend, active
  put (request, response) {
    response.send('Edit user: ' + request.params.userId + ' : ' + JSON.stringify(request.body))
  },

  // Delete - user
  remove (request, response) {
    response.send('Delete user: ' + request.params.userId)
  }

}
