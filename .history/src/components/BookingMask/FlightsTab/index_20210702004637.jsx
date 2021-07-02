
// components
import AirportInputs from './AirportInputs'
import DateInputs from './DateInputs'
import PassengersInput from './PassengersInput'
import FlightType from './FlightType'
import SubmitFlight from './SubmitFlight'
// redux
import { useStore, useDispatch } from 'react-redux'
import { createLink, sendErrors } from 'src/redux/reducers/flightReducer'

import './flightstab.scss'

export default function FlightsTab () {
  const store = useStore()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e && e.preventDefault()
    const res = createLink(store.getState())
    if (res.length > 0) {
      dispatch(sendErrors(res))
    }
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