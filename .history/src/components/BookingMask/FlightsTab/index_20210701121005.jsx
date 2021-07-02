// components
import { useRef } from 'react'
import AirportInput from './AirportInput'

const FlightsTab = ({ name, activeTab }) => {

  const fromRef = useRef(null)
  const toRef = useRef(null)

  return (
    <div>
      <AirportInput ref={fromRef} placeholder="From" />
      <AirportInput ref={toRef} placeholder="To" />
    </div>
  )
}

export default FlightsTab