// assets
import { CgArrowsExchange } from 'react-icons/cg'
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
          placeholder="From"
          showArrow={false}
        />
        <span className="separator" >
          <CgArrowsExchange/>
        </span>
        <AirportInput
          ref={toRef}
          placeholder="To"
          showArrow={false}
        />
      </div>
    </div>
  )
}

export default FlightsTab