
// components
import AirportInputs from './AirportInputs'
import DateInputs from './DateInputs'
import PassengersInput from './PassengersInput'
import FlightType from './FlightType'
import SubmitFlight from './SubmitFlight'
// redux
import { useStore } from 'react-redux'

import './flightstab.scss'

export default function FlightsTab () {
  const store = useStore()
  const handleSubmit = (e) => {
    e && e.preventDefault()
    console.log(store.getState())
  }
  return (
    <form className="bookingmask__flight" onSubmit={handleSubmit} >
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
    </form>
  )
}