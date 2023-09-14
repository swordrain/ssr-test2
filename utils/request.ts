import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api-staging.vfans.org',
})

export default request
