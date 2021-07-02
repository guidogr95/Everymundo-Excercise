import DateInput from './DateInput'
// components
import AirportInputs from './AirportInputs'

import './flightstab.scss'

const FlightsTab = () => {

  return (
    <div className="bookingmask__flight" >
      <AirportInputs/>
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