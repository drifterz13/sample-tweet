import axios from 'axios'

const authURL = '/api/auth'

export const auth = {
  signup: (credential) => axios.post(`${authURL}/signup`, credential)
    .then(res => res.data)
    .catch(err => Promise.reject(err)),
  signin: (credential) => axios.post(`${authURL}/signin`, credential)
    .then(res => res.data)
    .catch(err => Promise.reject(err))
}