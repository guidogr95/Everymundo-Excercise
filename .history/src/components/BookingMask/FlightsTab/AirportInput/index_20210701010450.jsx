import { useEffect, useState } from 'react'
// utils
import { useQuery } from 'react-query'
import { Select, Spin } from 'antd'
import useDebounce from 'src/hooks/useDebounce'
// api
import { fetchAirports } from 'src/api/fetchers'

const { Option } = Select;

const AirportInput = ({ placeholder }) => {
  const [term, setTerm] = useState('')
  const debouncedTerm = useDebounce(term, 1000)
  const { isLoading, isError, data, error, refetch, remove } = useQuery('airports', () => fetchAirports(term), { enabled: false })
  console.log(isLoading, data)
  console.log('term', term)

  const handleSelect = (val) => {
    setTerm(val)
  }

  useEffect(() => {
    refetch()
    // if (debouncedTerm.trim() !== '' && debouncedTerm.length > 2) {
    // } else {

    // }
  }, [debouncedTerm, refetch])

  return (
    <div>
      <Select
        showSearch
        allowClear
        placeholder={'Enter city'}
        value={term || undefined}
        onSearch={handleSelect}
        onChange={handleSelect}
        onBlur={remove}
        onClear={remove}
        size='large'
        defaultActiveFirstOption={false}
        filterOption={false}
        notFoundContent={isLoading ? <Spin size="small" /> : null}
      >
        {data ? data?.data.map(airport => <Option key={airport.iata}>{airport.city}</Option>) : null}
      </Select>
    </div>
  )
}

export default AirportInput