// components
import { useRef } from 'react'
import AirportInput from './AirportInput'

const FlightsTab = ({ name, activeTab }) => {

  const toRef = useRef(null)

  return (
    <div>
      <AirportInput ref={toRef} />
    </div>
  )
}

export default FlightsTab