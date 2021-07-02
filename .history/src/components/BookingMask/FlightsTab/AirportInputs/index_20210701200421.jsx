// assets
import { IoIosAirplane } from 'react-icons/io'
import { FaCompressArrowsAlt } from 'react-icons/fa'
// components
import AirportInput from './AirportInput'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { geoUpdateOrigin, geoUpdateDestination } from 'src/redux/reducers/flightReducer'

import './airportinputs.scss'

export default function AirportInputs () {
  const state = useSelector(state => state.geo)
  const dispatch = useDispatch()
  const { origin, destination } = state

  return (
    <div className="bookingmask__flight--geo" >
      <AirportInput
        label="From"
        value={origin}
        setValue={(v) => dispatch(geoUpdateOrigin(v))}
        placeholder="Enter city"
        id="fromInput"
        showArrow={true}
        suffixIcon={<FaCompressArrowsAlt/>}
        />
      <span className="separator" >
        <IoIosAirplane/>
      </span>
      <AirportInput
        label="To"
        value={destination}
        setValue={(v) => dispatch(geoUpdateDestination(v))}
        placeholder="Enter city"
        id="toInput"
        showArrow={false}
      />
    </div>
  )
}