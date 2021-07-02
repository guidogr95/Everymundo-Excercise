import { useCallback, useEffect, useState } from 'react'
// utils
import debounce from 'lodash/debounce'
import { Select, Spin } from 'antd'
// api
import { fetchAirports } from 'src/api/fetchers'

const { Option } = Select;

const AirportInput = ({ placeholder }) => {
  const [term, setTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const handleSelect = (val) => {
    setTerm(val)
    console.log('triggered')
  }
  useEffect(() => {
    console.log('triggered')

  }, [term])
  const debouncedHandleSelect = useCallback(
    debounce((val) => setTerm(val), 2000), []
  )

  return (
    <div>
      <Select
        showSearch
        allowClear
        placeholder={'Enter city'}
        value={term || undefined}
        onSearch={debouncedHandleSelect}
        onChange={debouncedHandleSelect}
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