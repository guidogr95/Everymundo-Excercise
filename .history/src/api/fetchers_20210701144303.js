// utils
import axios from 'axios'

const apiUrl = 'https://us-central1-kob-webinars.cloudfunctions.net/api'

const fetchAirports = (term, cancelToken) => axios.post(`${apiUrl}/getAirports`, { term }, { cancelToken })

export {
  fetchAirports
}