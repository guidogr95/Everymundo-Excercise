import { forwardRef, useState } from 'react'
// utils
import debounce from 'lodash/debounce'
import { Select, Spin } from 'antd'
// api
import { fetchAirports } from 'src/api/fetchers'
// components
import CustomSpin from 'src/components/CustomSpin'

import './airportinput.scss'

const { Option } = Select;

const AirportInput = forwardRef(({ placeholder }, ref) => {
  const [term, setTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const handleSelect = (val) => {
    const debouncedFetch = debounce((val) => {
      fetchAirports(val)
      .then((res) => setData(res.data || []))
      .catch(() => setData([]))
      .finally(() => setIsLoading(false))
    }, 2000)
    setIsLoading(true)
    const innerVal = val || ''
    setTerm(innerVal)
    // fetching api accepts a min of 3 letters for search
    if (innerVal.length <= 2) {
      setData([])
      setIsLoading(false)
    } else {
      debouncedFetch(val)
    }
  }

  return (
    <div className="airportinput__wrapper" >
      <Select
        showSearch
        allowClear
        ref={ref}
        placeholder={'Enter city'}
        value={term || undefined}
        onSearch={handleSelect}
        onChange={(val) => setTerm(val)}
        onClear={handleSelect}
        size='large'
        optionLabelProp='value'
        defaultActiveFirstOption={false}
        dropdownClassName="airportinput__dropdown"
        filterOption={false}
        notFoundContent={isLoading ? <CustomSpin size="medium"/> : null}
      >
        {data.length > 0 
          ? data.map(airport => 
            <Option key={airport.iata} value={`${airport.city} - ${airport.iata}`} >
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