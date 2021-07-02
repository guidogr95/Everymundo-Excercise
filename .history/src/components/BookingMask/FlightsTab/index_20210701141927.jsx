// assets
import { CgArrowsExchange } from 'react-icons/cg'
import { FaCompressArrowsAlt } from 'react-icons/fa'
// components
import { useRef } from 'react'
import AirportInput from './AirportInput'

import './flightstab.scss'

const FlightsTab = ({ name, activeTab }) => {

  const fromRef = useRef(null)
  const toRef = useRef(null)

  return (
    <div className="bookingmask__flight" >
      <div className="bookingmask__flight--geo" >
        <AirportInput
          ref={fromRef}
          label="From"
          placeholder="Enter city"
          id="fromInput"
          showArrow={true}
          suffixIcon={<FaCompressArrowsAlt/>}
          />
        <span className="separator" >
          <CgArrowsExchange/>
        </span>
        <AirportInput
          ref={toRef}
          label="To"
          placeholder="Enter city"
          id="toInput"
          showArrow={false}
        />
      </div>
    </div>
  )
}

export default FlightsTab