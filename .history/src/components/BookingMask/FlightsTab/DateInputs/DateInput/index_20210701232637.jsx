import { DatePicker } from 'antd'
import { useState } from 'react'

const DateInput = ({ id, label, setValue, className }) => {
  const [dateObj, setDateObj] = useState('')
  const onChange = (date, dateString) => {
    setDateObj(date)
    setValue(dateString)
  }
  return (
    <div className="dateinput__wrapper input-wrapper" >
      {label && <label htmlFor={id} >{label}</label>}
      <DatePicker
        size="large"
        id={id}
        className={className || ""}
        value={dateObj}
        onChange={onChange}
      />
    </div>
  )
}

export default DateInput