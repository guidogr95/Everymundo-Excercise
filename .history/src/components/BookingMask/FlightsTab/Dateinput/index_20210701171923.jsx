import { DatePicker } from 'antd'

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