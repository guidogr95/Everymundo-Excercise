import { useState } from 'react'
// utils
import { useQuery } from 'react-query'
// api
import { fetchAirports } from 'src/api/fetchers'

const AirportInput = () => {
  const [term, setTerm] = useState('Quito')
  const { isLoading, isError, data, error } = useQuery('airports', () => fetchAirports(term))
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default AirportInput