import { DatePicker } from 'antd'
import { useState } from 'react'

import './dateinput.scss'

const DateInput = ({ id, label }) => {
  const [value, setValue] = useState('')
  const onChange = (date, dateString) => {
    setValue(date)
    console.log(date, dateString);
  }
  return (
    <div className="dateinput__wrapper" >
      {label && <label htmlFor={id} >{label}</label>}
      <DatePicker
        size="large"
        id={id}
        value={}
        onChange={onChange}
      />
    </div>
  )
}

export default DateInput