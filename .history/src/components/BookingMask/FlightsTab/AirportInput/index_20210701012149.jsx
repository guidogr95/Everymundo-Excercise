import { useCallback, useEffect, useState } from 'react'
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
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  // const {
  //   isLoading,
  //   data,
  //   refetch,
  //   remove
  // } = useQuery('airports', () => fetchAirports(term), { enabled: false })

  const handleSelect = (val) => {
    setTerm(val)
  }
  const fetchWrapper = useCallback(() => fetchAirports(term), [term])

  useEffect(() => {
    if (debouncedTerm.trim() !== '' && debouncedTerm.length > 2) {
      setData([])
    } else {
      fetchWrapper()
      .then(res => console.log(res))
    }
  }, [debouncedTerm, fetchWrapper, setData])

  return (
    <div>
      <Select
        showSearch
        allowClear
        placeholder={'Enter city'}
        value={term || undefined}
        onSearch={handleSelect}
        onChange={handleSelect}
        onBlur={() => setData([])}
        onClear={() => setData([])}
        size='large'
        defaultActiveFirstOption={false}
        filterOption={false}
        notFoundContent={isLoading ? <Spin size="small" /> : null}
      >
        {data.length > 0 ? data.map(airport => <Option key={airport.iata}>{airport.city}</Option>) : null}
      </Select>
    </div>
  )
}

export default AirportInput