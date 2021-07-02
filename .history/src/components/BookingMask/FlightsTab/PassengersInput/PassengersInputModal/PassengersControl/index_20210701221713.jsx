// assets
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { passUpdateSubtract, passUpdateAdd } from 'src/redux/reducers/flightReducer'

export default function PassengersControl ({ passengerType, data }) {
  const state = useSelector(state => state.passengers[passengerType])
  const dispatch = useDispatch()
  const { value } = state
  const min = data.min || 0
  return (
    <div
      className="passengersmodal__input-wrapper"
    >
      <span>
        {data.plural}
      </span>
      <div className="passengersmodal__input--control" >
        <button
          onClick={ value <= min ? undefined : dispatch(passUpdateSubtract(passengerType))}
        >
          <IoMdRemove/>
        </button>
        <button>
          {value}
        </button>
        <button
          onClick={() => dispatch(passUpdateAdd(passengerType))}
        >
          <IoMdAdd/>
        </button>
      </div>
    </div>
  )
}