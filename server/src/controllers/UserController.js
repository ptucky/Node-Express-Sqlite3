const {User} = require('../models')

module.exports = {
  
  // Get - all user
  async index (request, response){
    //response.send('Show all User')
    try {
      
      //console.log('0')
      const users = await User.finAll()
      response.send(users)

    } catch (err) {
      response.send({
        error: response.status
      })
    }
  },

  // Get - user by id
  async showId (request, response){
    //response.send('Show user by id: ' + request.params.userId)
    try {
      
      const user = await User.findById(request.params.userId)
      reqsponse.send(user.toJSON())

    } catch (err) {
      response.send({
        error: response.status
      })
      /*  
      response.status(500).send({
        error: response.status
      }) 
      */
    }
  },
  
  // Create - user
  async create (request, response) {
    //response.send('Create user: ' + JSON.stringify(request.body))
    try {

      const user = await User.create(request.body)
      response.send(user.toJSON())

    } catch (err) {
      response.status(500).send({
        error: response.status
      })
    }
  },

  // Edit - user, suspend, active
  async put (request, response) {
    //response.send('Edit user: ' + request.params.userId + ' : ' + JSON.stringify(request.body))
    try {
      
      await User.update(request.body, {
        where: {
          id: request.params.userId
        }
      })
      response.send(request.body)

    } catch (err) {
      response.status(500).send({
        error: response.status
      })
    }
  },

  // Delete - user
  async remove (request, response) {
    //response.send('Delete user: ' + request.params.userId)
    try {
      
      // find or fail
      const user = await User.findOne({
        where: {
          id: request.params.userId
        }
      })

      // Checking exist user
      if(!user){
        return response.status(403).send({
          error: 'No user exist'
        })
      }

      // delete and responsne
      await user.destroy()
      response.send(user)

    } catch (err) {
      response.status(500).send({
        error: response.status
      })
    }
  }

}
