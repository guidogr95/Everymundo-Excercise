import { forwardRef, useCallback, useState, useMemo } from 'react'
// utils
import throttle from 'lodash/throttle'
import { Select } from 'antd'
// api
import { fetchAirports } from 'src/api/fetchers'
// components
import CustomSpin from 'src/components/CustomSpin'

import './airportinput.scss'

const { Option } = Select;

const AirportInput = forwardRef(({ placeholder, showArrow, suffixIcon, label, id , value, setValue }, ref) => {
  
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const throttledFetch = useMemo(
    () =>
      throttle(val => {
        fetchAirports(val)
        .then((res) => setData(res.data || []))
        .catch(() => setData([]))
        .finally(() => {
          setIsLoading(false)
        })
      }, 2000),
    []
  )
  const handleSelect = useCallback(
    val => {
      setIsLoading(true)
      const innerVal = val || ''
      setValue(innerVal)
      // fetching api accepts a min of 3 letters for search
      if (innerVal.length <= 2) {
        setData([])
        setIsLoading(false)
      } else {
        throttledFetch(val)
      }
    },
    [throttledFetch, setValue]
  )

  return (
    <div className="airportinput__wrapper" >
      {label && <label htmlFor={id} >{label}</label>}
      <Select
        showSearch
        allowClear
        id={id}
        ref={ref}
        placeholder={placeholder || 'Enter city'}
        value={value || undefined}
        onSearch={handleSelect}
        onChange={(val) => setValue(val)}
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