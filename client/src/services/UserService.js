import Api from '@/services/Api'

/**
 * All url route from server Node
 */
export default {
  index (search) {
    return Api().get('/users')
  },
  show (userId) {
    return Api().get('/user/' + userId)
  },
  post (userId) {
    return Api().post('/user', userId)
  },
  put (user) {
    return Api().put('/user/' + user.id, user)
  },
  delete (user) {
    return Api().delete('/user/' + user.id, user)
  }
}
