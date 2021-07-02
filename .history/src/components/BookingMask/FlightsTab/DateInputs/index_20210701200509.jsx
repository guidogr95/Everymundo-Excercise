// assets
import { CgArrowsExchange } from 'react-icons/cg'
// components
import DateInput from './DateInput'
// redux
import { useDispatch } from 'react-redux'
import { dateUpdateDeparture, dateUpdateToReturn } from 'src/redux/reducers/flightReducer'

import './dateinputs.scss'

export default function DateInputs () {
  const dispatch = useDispatch()
  return (
    <div className="bookingmask__flight--date" >
      <DateInput
          label="Departure date"
          id="depInput"
          setValue={(v) => dispatch(dateUpdateDeparture(v))}
      />
      <span className="separator" >
        <CgArrowsExchange/>
      </span>
      <DateInput
          label="Return date"
          id="returnInput"
          setValue={(v) => dispatch(dateUpdateToReturn(v))}
      />  
    </div>
  )
}