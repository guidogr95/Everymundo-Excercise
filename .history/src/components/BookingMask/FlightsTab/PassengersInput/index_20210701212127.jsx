import { useState } from 'react'
// utils
import { Input } from 'antd'
// assets
import { IoMdArrowDropdown } from 'react-icons/io'
// components
import PassengersInputModal from './PassengersInputModal'
// redux
import { useDispatch, useSelector } from 'react-redux'

import './passengersinput.scss'

export default function PassengersInput ({ label, id }) {
  const state = useSelector(state => state.passengers)
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const value = Object.values(state).map(entry => entry.value <= 0 ? '' : `${entry.value} ${entry.value > 1 ? entry.plural : entry.singular}` ).filter(entry => entry !== '').join(', ')

  return (
    <div className="bookingmask__flight--pass inputs-wrapper input-wrapper" >
      { label && <label htmlFor={id} >{label}</label>}
      <Input
        suffix={
          <IoMdArrowDropdown
            onClick={() => setShowModal(!showModal)}
            style={{ cursor: 'pointer' }}
          />
        }
        id={id}
        size="large"
        onClick={() => setShowModal(!showModal)}
        value={value}
      />
      <PassengersInputModal isVisible={showModal} setIsVisible={setShowModal} />
    </div>
  )
}