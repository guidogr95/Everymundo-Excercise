// utils
import axios from 'axios'

const apiUrl = 'https://us-central1-kob-webinars.cloudfunctions.net/api'

const fetchAirports = async (term) => await axios.post(`${apiUrl}/getAirports`, { term })

export {
  fetchAirports
}