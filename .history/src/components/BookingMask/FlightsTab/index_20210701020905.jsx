// components
import { useRef } from 'react'
import AirportInput from './AirportInput'

const FlightsTab = ({ name, activeTab }) => {

  const toRef = useRef(null)

  return (
    <div>
      <AirportInput ref={toRef} />
      <button onClick={() => console.log(toRef)} >click</button>
    </div>
  )
}

export default FlightsTab