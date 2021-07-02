import { useEffect, useState } from 'react'
// styles
import 'aiportinput.scss'
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
  console.log(isLoading, data?.airports)
  console.log('term', term)

  const handleSelect = (val) => {
    setTerm(val)
  }

  useEffect(() => {
    if (debouncedTerm.trim() !== '' && debouncedTerm.length > 2) {
      refetch()
    }
  }, [debouncedTerm, refetch])

  return (
    <div>
      <Select
        showSearch={data?.airports || false}
        placeholder={placeholder || 'Enter city'}
        value={term}
        onSearch={handleSelect}
        onChange={handleSelect}
      >
        {data?.airports ? data?.airports?.map(airport => <Option>{airport.city}</Option>) : null}
      </Select>
    </div>
  )
}

export default AirportInput