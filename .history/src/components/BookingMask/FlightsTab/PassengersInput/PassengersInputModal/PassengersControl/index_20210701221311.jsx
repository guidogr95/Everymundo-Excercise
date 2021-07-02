// assets
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

export default function PassengersControl ({ passengerType, data }) {
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
          // onClick={data.value <= min ? undefined : dispatch(passUpdateSubtract(entry[0]))}
        >
          <IoMdRemove/>
        </button>
        <button>
          {data.value}
        </button>
        <button
          // onClick={() => dispatch(passUpdateAdd(entry[0]))}
        >
          <IoMdAdd/>
        </button>
      </div>
    </div>
  )
}