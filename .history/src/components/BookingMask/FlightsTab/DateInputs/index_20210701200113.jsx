// components
import DateInput from './DateInput'
// redux
import { useDispatch } from 'react-redux'
import { dateUpdateDeparture, dateUpdateToReturn } from 'src/redux/reducers/flightReducer'

export default function DateInputs () {
  const dispatch = useDispatch()
  return (
    <div className="bookingmask__flight--date" >
      <DateInput
          label="Departure date"
          id="depInput"
          setValue={(v) => dispatch(dateUpdateDeparture(v))}
      />
      
      <DateInput
          label="Return date"
          id="returnInput"
          setValue={(v) => dispatch(dateUpdateToReturn(v))}
      />  
    </div>
  )
}