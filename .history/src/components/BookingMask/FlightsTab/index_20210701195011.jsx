import DateInput from './DateInput'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { geoUpdateOrigin, geoUpdateDestination } from 'src/redux/reducers/flightReducer'
// components
import AirportInputs from './AirportInputs'

import './flightstab.scss'

const FlightsTab = () => {
  
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const { geo } = state

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