import { forwardRef, useState } from 'react'
// utils
import debounce from 'lodash/debounce'
import { Select, Spin } from 'antd'
// api
import { fetchAirports } from 'src/api/fetchers'

const { Option } = Select;

const AirportInput = forwardRef(({ placeholder }, ref) => {
  const [term, setTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const handleSelect = (val) => {
    const innerVal = val || ''
    setTerm(innerVal)
    if (innerVal.length <= 2) {
      setData([])
    } else {
      setIsLoading(true)
      fetchAirports(val)
      .then((res) => setData(res.data || []))
      .catch(() => setData([]))
      .finally(() => setIsLoading(false))
    }
  }
  const debouncedHandleSelect = debounce((val) => handleSelect(val), 2000)

  return (
    <div>
      <Select
        showSearch
        allowClear
        ref={ref}
        placeholder={'Enter city'}
        value={term || undefined}
        onSearch={debouncedHandleSelect}
        onChange={debouncedHandleSelect}
        onClear={handleSelect}
        size='large'
        defaultActiveFirstOption={false}
        filterOption={false}
        notFoundContent={isLoading ? <Spin size="small" /> : null}
      >
        {data.length > 0 
          ? data.map(airport => 
            <Option key={airport.iata}>
              <span>{airport.name}</span>
              <span>{airport.iata}</span>
              <span>{airport.country.name}</span>
            </Option>)
          : null
        }
      </Select>
    </div>
  )
})

export default AirportInput