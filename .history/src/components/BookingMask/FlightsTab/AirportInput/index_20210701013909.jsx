import { useCallback, useEffect, useMemo, useState } from 'react'
// utils
import throttle from 'lodash/throttle'
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
  const throttledHandleSelect = throttle(handleSelect, 1000)

  return (
    <div>
      <Select
        showSearch
        allowClear
        placeholder={'Enter city'}
        value={term || undefined}
        onSearch={throttledHandleSelect}
        onChange={throttledHandleSelect}
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