const { User } = require('../models')
const config = require('../config/config')
const jwt = require('jsonwebtoken')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expireIn: ONE_WEEK 
  })
}

module.export = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      res.status(400).send({
        error: 'The information was incorrect.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if(!user){
        return res.status(403).send({
          error: 'User/Password was incorrect.'
        })
      }

      const isPasswordValid = await user.comparsePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'User/Password was incorrect.'
        })
      }

      const userJSON = user.toJSON()
      res.send(userJSON)

    } catch (error) {
      res.status(500).send({
        error: 'Error! from get user'
      })
    } 
  }
}
