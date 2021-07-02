import { DatePicker } from 'antd'

import './dateinput.scss'

const DateInput = ({ id, label }) => {
  return (
    <div className="dateinput__wrapper" >
      {label && <label htmlFor={id} >{label}</label>}
      <DatePicker
        size="large"
        id={id}
      />
    </div>
  )
}

export default DateInput