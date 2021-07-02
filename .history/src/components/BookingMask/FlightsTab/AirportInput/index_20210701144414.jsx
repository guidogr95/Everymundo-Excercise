import { forwardRef, useState } from 'react'
// utils
import debounce from 'lodash/debounce'
import { Select } from 'antd'
import axios from 'axios'
// api
import { fetchAirports } from 'src/api/fetchers'
// components
import CustomSpin from 'src/components/CustomSpin'

import './airportinput.scss'

const source = axios.CancelToken.source()
const { Option } = Select;

const AirportInput = forwardRef(({ placeholder, showArrow, suffixIcon, label, id }, ref) => {
  const [term, setTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const handleSelect = async (val) => {
    const debouncedFetch = debounce((val) => {
      fetchAirports(val, source.token)
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
      source && await source.cancel()
      debouncedFetch(val)
    }
  }

  return (
    <div className="airportinput__wrapper" >
      {label && <label htmlFor={id} >{label}</label>}
      <Select
        showSearch
        allowClear
        id={id}
        ref={ref}
        placeholder={placeholder || 'Enter city'}
        value={term || undefined}
        onSearch={handleSelect}
        onChange={(val) => setTerm(val)}
        onClear={handleSelect}
        size='large'
        showArrow={showArrow}
        suffixIcon={suffixIcon}
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