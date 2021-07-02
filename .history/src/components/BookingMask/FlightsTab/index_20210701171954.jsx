import { useRef } from 'react'
// assets
import { CgArrowsExchange } from 'react-icons/cg'
import { FaCompressArrowsAlt } from 'react-icons/fa'
// components
import AirportInput from './AirportInput'
import DateInput from './DateInput'

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
      <div className="bookingmask__flight--date" >
        <DateInput
          label="Departure date"
          id="depInput"
        />
      </div>
    </div>
  )
}

export default FlightsTab