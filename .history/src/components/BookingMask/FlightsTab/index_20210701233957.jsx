// utils
import { Form } from 'antd';
// components
import AirportInputs from './AirportInputs'
import DateInputs from './DateInputs'
import PassengersInput from './PassengersInput'
import FlightType from './FlightType'
import SubmitFlight from './SubmitFlight'

import './flightstab.scss'

export default function FlightsTab () {
  const handleSubmit = (e) => {
    e && e.preventDefault()
    console.log("trig")
  }
  return (
    <Form className="bookingmask__flight" onSubmit={handleSubmit} >
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
    </Form>
  )
}