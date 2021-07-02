// assets
import { BiTargetLock } from 'react-icons/bi'
// components
import { useRef } from 'react'
import AirportInput from './AirportInput'

const FlightsTab = ({ name, activeTab }) => {

  const fromRef = useRef(null)
  const toRef = useRef(null)

  return (
    <div>
      <AirportInput
        ref={fromRef}
        placeholder="From"
        suffixIcon={BiTargetLock}
        showArrow={true}
      />
      <AirportInput
        ref={toRef}
        placeholder="To"
        showArrow={false}
      />
    </div>
  )
}

export default FlightsTab