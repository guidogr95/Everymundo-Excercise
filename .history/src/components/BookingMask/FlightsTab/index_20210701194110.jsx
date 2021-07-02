// assets
import { CgArrowsExchange } from 'react-icons/cg'
import { FaCompressArrowsAlt } from 'react-icons/fa'
// components
import AirportInput from './AirportInput'
import DateInput from './DateInput'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { geoUpdateOrigin, geoUpdateDestination } from 'src/redux/reducers/flightReducer'

import './flightstab.scss'

const FlightsTab = ({ name, activeTab }) => {
  
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const { geo, date } = state

  return (
    <div className="bookingmask__flight" >
      <div className="bookingmask__flight--geo" >
        <AirportInput
          label="From"
          value={geo.origin}
          setValue={(v) => dispatch(geoUpdateOrigin(v))}
          placeholder="Enter city"
          id="fromInput"
          showArrow={true}
          suffixIcon={<FaCompressArrowsAlt/>}
          />
        <span className="separator" >
          <CgArrowsExchange/>
        </span>
        <AirportInput
          label="To"
          value={geo.destination}
          setValue={(v) => dispatch(geoUpdateDestination(v))}
          placeholder="Enter city"
          id="toInput"
          showArrow={false}
        />
      </div>
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