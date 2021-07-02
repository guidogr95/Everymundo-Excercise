// assets
import { CgArrowsExchange } from 'react-icons/cg'
// components
import DateInput from './DateInput'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { dateUpdateDeparture, dateUpdateToReturn } from 'src/redux/reducers/flightReducer'

export default function DateInputs () {
  const dispatch = useDispatch()
  const state = useSelector(state => state.isOneWay)
  return (
    <div className="bookingmask__flight--date inputs-wrapper" >
      <DateInput
        label="Departure date"
        id="depInput"
        setValue={(v) => dispatch(dateUpdateDeparture(v))}
      />
      {!state &&
        <>
          <span className="separator" >
            <CgArrowsExchange/>
          </span>
          <DateInput
            label="Return date"
            id="returnInput"
            setValue={(v) => dispatch(dateUpdateToReturn(v))}
          />  
        </>
      }
    </div>
  )
}