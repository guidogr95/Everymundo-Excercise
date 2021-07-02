// utils
import axios from 'axios'

const apiUrl = 'https://airportnames.vercel.app/api'

const fetchAirports = (term) => axios.post(`${apiUrl}/getAirports`, { term })

export {
  fetchAirports
}