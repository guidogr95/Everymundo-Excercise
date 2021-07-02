import { forwardRef, useCallback, useEffect, useState } from 'react'
// utils
import throttle from 'lodash/throttle'
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
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState([])

  const throttledFetch = useCallback(throttle((val) => {
    console.log('bounde')
    // setIsFetching(true)
    // fetchAirports(val, source.token)
    // .then((res) => {
    //   console.log('success', res)
    //   setData(res.data || [])
    // })
    // .catch((err) => {
    //   console.log('error', err)
    //   setData([])
    // })
    // .finally(() => {
    //   setIsLoading(false)
    //   setIsFetching(false)
    // })
  }, 0, {leading: false}), [])

  const handleSelect = (val) => {
    
    setIsLoading(true)
    const innerVal = val || ''
    setTerm(innerVal)
    // fetching api accepts a min of 3 letters for search
    if (innerVal.length <= 2) {
      setData([])
      setIsLoading(false)
    } else {
      // if (source && isFetching) {
      //   console.log('cencelled')
      //   source.cancel(`${val}-${term}`)
      // }
      throttledFetch(val)
    }
  }

  useEffect(() => {
    console.log(data)
  }, [data])

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