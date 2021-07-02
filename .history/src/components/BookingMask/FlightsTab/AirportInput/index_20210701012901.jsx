import { useCallback, useEffect, useMemo, useState } from 'react'
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
  const memoTerm = useMemo(() => term, [term])
  // const fetchWrapper = useCallback(() => fetchAirports(memoTerm), [memoTerm])

  useEffect(() => {
    console.log('now')
    if (debouncedTerm.trim() !== '' && debouncedTerm.length > 2) {
      setData([])
    } else {
      fetchAirports(memoTerm)
      .then(res => console.log(res))
    }
  }, [debouncedTerm, setData, memoTerm])

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