import axios from 'axios'

export default {
  user() {
    return {
      authentication: (config) => axios(config)
    }
  }
}