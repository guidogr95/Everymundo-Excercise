// utils
import { Input } from 'antd'
// assets
import { IoMdArrowDropdown } from 'react-icons/io'

export default function PassengersInput ({ label, id }) {
  return (
    <div className="bookingmask__flight--pass inputs-wrapper" >
      { label && <label htmlFor={id} >{label}</label>}
      <Input
        suffix={<IoMdArrowDropdown/>}
        id={id}
        size="large"
      />
    </div>
  )
}