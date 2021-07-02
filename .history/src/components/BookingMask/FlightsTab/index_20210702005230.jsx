
// components
import AirportInputs from './AirportInputs'
import DateInputs from './DateInputs'
import PassengersInput from './PassengersInput'
import FlightType from './FlightType'
import SubmitFlight from './SubmitFlight'
// redux
import { useStore, useDispatch } from 'react-redux'
import { createLink } from 'src/redux/reducers/flightReducer'
import { sendErrors, removeErrors } from 'src/redux/reducers/errorsReducer'

import './flightstab.scss'

export default function FlightsTab () {
  const store = useStore()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e && e.preventDefault()
    const { flight } = store.getState()
    const res = createLink(flight)
    if (res?.length > 0) {
      dispatch(sendErrors(res))
    } else {
      dispatch(removeErrors())
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