import { DatePicker } from 'antd'
import { useState } from 'react'

import './dateinput.scss'

const DateInput = ({ id, label, setValue }) => {
  const [dateObj, setDateObj] = useState('')
  const onChange = (date, dateString) => {
    setDateObj(date)
    setValue(dateString)
  }
  return (
    <div className="dateinput__wrapper" >
      {label && <label htmlFor={id} >{label}</label>}
      <DatePicker
        size="large"
        id={id}
        value={dateObj}
        onChange={onChange}
      />
    </div>
  )
}

export default DateInput