// utils
import { Input } from 'antd'
// assets
import { IoMdArrowDropdown } from 'react-icons/io'

export default function PassengersInput () {
  return (
    <div className="bookingmask__flight--pass" >
      <Input
        suffix={<IoMdArrowDropdown/>}
        size="large"
      />
    </div>
  )
}