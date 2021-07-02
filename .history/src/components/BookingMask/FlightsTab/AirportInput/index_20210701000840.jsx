import { useState } from 'react'
// utils
import { useQuery } from 'react-query'
import { Select } from 'antd'
// api
import { fetchAirports } from 'src/api/fetchers'

const { Option } = Select;

const AirportInput = ({ placeholder }) => {
  const [term, setTerm] = useState('')
  const { isLoading, isError, data, error, refetch } = useQuery('airports', () => fetchAirports(term), { enabled: false })
  console.log(isLoading, data)
  console.log('term', term)

  const handleSelect = (val) => {
    setTerm(term)
    refetch()
  }

  return (
    <div>
      <Select
        showSearch
        placeholder={placeholder || 'Enter city'}
        value={term}
        onSearch={handleSelect}
        onChange={handleSelect}
      >
        {isLoading ? 'loading' : !isError ? data?.airports?.map(airport => <Option>{airport.city}</Option>) : null}
      </Select>
      <button onClick={refetch} >refetch</button>
    </div>
  )
}

export default AirportInput