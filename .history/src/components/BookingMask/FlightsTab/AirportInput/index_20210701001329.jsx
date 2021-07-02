import { useEffect, useState } from 'react'
// utils
import { useQuery } from 'react-query'
import { Select } from 'antd'
import useDebounce from 'src/hooks/useDebounce'
// api
import { fetchAirports } from 'src/api/fetchers'

const { Option } = Select;

const AirportInput = ({ placeholder }) => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounce(term, 1000)
  const { isLoading, isError, data, error, refetch } = useQuery('airports', () => fetchAirports(term), { enabled: false })
  console.log(isLoading, data)
  console.log('term', term)

  const handleSelect = (val) => {
    setTerm(val)
    // refetch()
  }

  useEffect(() => {
    console.log('triggerd')
  }, [debouncedTerm])

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