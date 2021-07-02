import React from 'react'
// utils
import { Modal, Button } from 'antd'
// assets
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io'
// redux
import { useStore } from 'react-redux'
import { passUpdateSubtract, passUpdateAdd } from 'src/redux/reducers/flightReducer'

const PassengersInputModal = React.memo(({ title, isVisible, setIsVisible }) => {
  const store = useStore()
  const { passengers } = store.getState()
  return (
    <Modal
      title={title || ''}
      centered
      visible={isVisible}
      closeIcon={<IoMdClose onClick={() => setIsVisible(false)} />}
      onOk={() => setIsVisible(false)}
      footer={[
        <Button key="ok" onClick={() => setIsVisible(false)}>
          Continue
        </Button>
      ]}
    >
      {Object.entries(passengers).map(entry => {
        // <PassengersControl />
        const data = entry[1]
        const min = data.min || 0
        return (
          <div
            className="passengersmodal__input-wrapper"
            key={entry[0]}
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
      })}
    </Modal>
  )
})

export default PassengersInputModal