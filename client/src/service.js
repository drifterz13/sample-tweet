import axios from 'axios'

export default {
  user() {
    return {
      authentication: (config) => axios(config)
    }
  },
  message(url) {
    if (localStorage.authToken) {
      const token = localStorage.authToken
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    return {
      getAll: () => axios.get(url),
      tweet: (text) => axios.post(url, text)
    }
  }
}