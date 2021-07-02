// utils
import axios from 'axios'

// config
// API keys and secret to be added as env variables but they're added as strings here for simplicity
const headers = {
  headers: {
    'Content-Type': 'aplication/json',
    'Accept': 'application/json',
    'APC-Auth': '3cf5d1fd31',
    'APC-Auth-Secret': '90df6df6e13e91c',
    'Website': 'http://localhost:3000/',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
}
const apiUrl = 'https://www.air-port-codes.com/api/v1'

const fetchAirports = (term) => axios.post(`${apiUrl}/autocomplete?term=${term}`, {}, headers)

export {
  fetchAirports
}