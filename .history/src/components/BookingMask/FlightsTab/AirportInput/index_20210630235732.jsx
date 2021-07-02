import { useState } from 'react'
// utils
import { useQuery } from 'react-query'
import { Select } from 'antd'
// api
import { fetchAirports } from 'src/api/fetchers'

const { Option } = Select;

const AirportInput = ({ placeholder }) => {
  const [term, setTerm] = useState('')
  const { isLoading, isError, data, error } = useQuery('airports', () => fetchAirports(term))
  console.log(isLoading, data)
  console.log('term', term)
  return (
    <div>
      <Select
        showSearch
        placeholder={placeholder || 'Enter city'}
        value={term}
        onSearch={(value) => setTerm(value)}
        onChange={(value) => setTerm(value)}
      >
        {isLoading ? 'loading' : !isError ? data?.airports?.map(airport => <Option>{airport.city}</Option>) : null}
      </Select>
    </div>
  )
}

export default AirportInput