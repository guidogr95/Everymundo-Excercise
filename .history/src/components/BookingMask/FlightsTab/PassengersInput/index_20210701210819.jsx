// utils
import { Input } from 'antd'
// assets
import { IoMdArrowDropdown } from 'react-icons/io'
// redux
// redux
import { useDispatch, useSelector } from 'react-redux'
import { geoUpdateOrigin, geoUpdateDestination } from 'src/redux/reducers/flightReducer'

import './passengersinput.scss'

export default function PassengersInput ({ label, id }) {
  const getNumberString = (value, string, isPlural) => value <= 0 ? '' : `${value} ${string}${value > 1 && isPlural ? 's' : ''}`

  const state = useSelector(state => state.passengers)
  const dispatch = useDispatch()
  const value = Object.values(state).map(entry => entry.value <= 0 ? '' : `${entry.value} ${entry.value > 1 ? entry.plural : entry.singular}` ).filter(entry => entry !== '').join(', ')
  return (
    <div className="bookingmask__flight--pass inputs-wrapper input-wrapper" >
      { label && <label htmlFor={id} >{label}</label>}
      <Input
        suffix={<IoMdArrowDropdown/>}
        id={id}
        size="large"
        value={value}
      />
    </div>
  )
}