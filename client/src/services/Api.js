import axios from 'axios'

/**
 * Call url route from server node
*/
export default (params) => {
  return axios.create({
    baseURL: 'http://localhost:8081'
  })
}
