import axios from 'axios'

export const apiCall = (config) => axios(config).catch(err => Promise.reject(err.response.data.error))
