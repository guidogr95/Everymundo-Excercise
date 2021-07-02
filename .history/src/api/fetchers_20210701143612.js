// utils
import axios from 'axios'
const CancelToken = axios.CancelToken
let source = CancelToken.source()

source && source.cancel('Operation cancelled due to new req')
source = axios.CancelToken.source()

const apiUrl = 'https://us-central1-kob-webinars.cloudfunctions.net/api'

const fetchAirports = {
  fetch: (term) => axios.post(`${apiUrl}/getAirports`, { term }, { cancelToken: source.token }),
  cancel: source
}

export {
  fetchAirports
}