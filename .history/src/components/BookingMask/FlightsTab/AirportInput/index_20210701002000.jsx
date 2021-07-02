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
  }

  useEffect(() => {
    console.log('now')
    if (debouncedTerm.trim() !== '') {
      console.log('now 1')
      refetch()
    }
  }, [debouncedTerm, refetch])

  return (
    <div>
      <Select
        showSearch
        placeholder={placeholder || 'Enter city'}
        value={term}
        onSearch={handleSelect}
        onChange={handleSelect}
      >
        {data?.airports ? data?.airports?.map(airport => <Option>{airport.city}</Option>) : null}
      </Select>
      <button onClick={refetch} >refetch</button>
    </div>
  )
}

export default AirportInput