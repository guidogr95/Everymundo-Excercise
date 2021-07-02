
// components
import AirportInputs from './AirportInputs'
import DateInputs from './DateInputs'
import PassengersInput from './PassengersInput'
import FlightType from './FlightType'
import SubmitFlight from './SubmitFlight'

import './flightstab.scss'

export default function FlightsTab () {
  return (
    <div className="bookingmask__flight" >
      <div className="bookingmask__flight--controls" >
        <AirportInputs/>
        <DateInputs/>
        <PassengersInput
          label="Travellers"
          id={"passInput"}
        />
      </div>
      <div className="bookingmask__flight--footer" >
        <FlightType />
        <SubmitFlight />
      </div>
    </div>
  )
}