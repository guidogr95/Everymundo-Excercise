import { DatePicker } from 'antd'
import { useState } from 'react'

import './dateinput.scss'

const DateInput = ({ id, label }) => {
  const [value, setValue] = useState('')
  const onChange = (date, dateString) => {
    setValue(dateString)
    console.log(dateString);
  }
  return (
    <div className="dateinput__wrapper" >
      {label && <label htmlFor={id} >{label}</label>}
      <DatePicker
        size="large"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default DateInput