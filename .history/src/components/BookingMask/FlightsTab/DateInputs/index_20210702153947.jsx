// assets
import { CgArrowsExchange } from 'react-icons/cg'
// components
import DateInput from './DateInput'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { dateUpdateDeparture, dateUpdateToReturn } from 'src/redux/reducers/flightReducer'

import './dateinputs.scss'

export default function DateInputs () {
  const dispatch = useDispatch()
  const state = useSelector(state => state.flight.isOneWay)
  return (
    <div className="bookingmask__flight--date inputs-wrapper" >
      <DateInput
        label="Departure date"
        id="depInput"
        setValue={(v) => dispatch(dateUpdateDeparture(v))}
      />
      <span className={`separator${state ? ' hidden' : ''}`} >
        <CgArrowsExchange/>
      </span>
      <DateInput
        label="Return date"
        className={`${state ? 'hidden' : ''}`}
        id="returnInput"
        setValue={(v) => dispatch(dateUpdateToReturn(v))}
      />  
    </div>
  )
}