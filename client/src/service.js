import axios from 'axios'

const checkToken = () => {
  if (localStorage.authToken) {
    const token = localStorage.authToken
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}

export default {
  user() {
    return {
      authentication: (config) => axios(config)
    }
  },
  message(url) {
    checkToken()
    return {
      getAll: () => axios.get(url),
      tweet: (text) => axios.post(url, text)
    }
  },
  resetPassword(url) {
    checkToken()
    return {
      reset: (pw) => axios.post(url, pw)
    }
  }
}