// utils
import { Input } from 'antd'
// assets
import { IoMdArrowDropdown } from 'react-icons/io'

import './passengersinput.scss'

export default function PassengersInput ({ label, id }) {
  return (
    <div className="bookingmask__flight--pass inputs-wrapper input-wrapper" >
      { label && <label htmlFor={id} >{label}</label>}
      <Input
        suffix={<IoMdArrowDropdown/>}
        id={id}
        size="large"
      />
    </div>
  )
}