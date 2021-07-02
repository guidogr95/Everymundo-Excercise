import React from 'react'
// utils
import { Modal, Button } from 'antd'
// assets
import { IoMdClose } from 'react-icons/io'
// components
import  PassengersControl from './PassengersControl'
// redux
import { useStore } from 'react-redux'

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
      {Object.entries(passengers).map(entry =>
        <PassengersControl
          key={entry[0]}
          passengerType={entry[0]}
          data={entry[1]}
        />
      )}
    </Modal>
  )
})

export default PassengersInputModal