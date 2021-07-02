
// components
import AirportInputs from './AirportInputs'
import DateInputs from './DateInputs'

import './flightstab.scss'

export default function FlightsTab () {
  return (
    <div className="bookingmask__flight" >
      <AirportInputs/>
      <DateInputs/>
    </div>
  )
}