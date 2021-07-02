
// components
import AirportInputs from './AirportInputs'
import DateInputs from './DateInputs'

import './flightstab.scss'

const FlightsTab = () => {

  return (
    <div className="bookingmask__flight" >
      <AirportInputs/>
      <DateInputs/>
    </div>
  )
}

export default FlightsTab