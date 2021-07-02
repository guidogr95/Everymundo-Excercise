import { DatePicker } from 'antd'

import './dateinput.scss'

const DateInput = ({ id, label }) => {
  
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }
  return (
    <div className="dateinput__wrapper" >
      {label && <label htmlFor={id} >{label}</label>}
      <DatePicker
        size="large"
        id={id}
        onChange={onChange}
      />
    </div>
  )
}

export default DateInput