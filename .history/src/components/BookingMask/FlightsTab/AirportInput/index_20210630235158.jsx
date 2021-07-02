import { useState } from 'react'
// utils
import { useQuery } from 'react-query'
import { Select } from 'antd'
// api
import { fetchAirports } from 'src/api/fetchers'

const { Option } = Select;

const AirportInput = ({ placeholder }) => {
  const [term, setTerm] = useState('Quito')
  const { isLoading, isError, data, error } = useQuery('airports', () => fetchAirports(term))
  return (
    <div>
      <Select
        showSearch
        placeholder={placeholder || 'Enter city'}
      >
        {isLoading ? 'loading' : !isError && data.airports.map(airport => <Option>{airport.city}</Option>)}
      </Select>
    </div>
  )
}

export default AirportInput