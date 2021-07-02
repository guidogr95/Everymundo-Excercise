// utils
import { Checkbox } from 'antd';
// redux
import { useSelector, useDispatch } from 'react-redux'
import { typeUpdateIsOneWay } from 'src/redux/reducers/flightReducer'

export default function FlightType () {
  const state = useSelector(state => state.flight.isOneWay)
  const dispatch = useDispatch()

  return (
    <span>
      <Checkbox
        checked={state}
        onChange={e => dispatch(typeUpdateIsOneWay(e.target.checked))}
        size="large"
      >
        One-way
      </Checkbox>
    </span>
  )
}