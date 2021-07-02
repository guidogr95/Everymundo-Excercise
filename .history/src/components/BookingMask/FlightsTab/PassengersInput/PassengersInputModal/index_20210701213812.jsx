// utils
import { Modal, Button } from 'antd'
// assets
import { IoMdClose } from 'react-icons/io'
// redux
import { useDispatch } from 'react-redux'
import { passUpdateSubtract, passUpdateAdd } from 'src/redux/reducers/flightReducer'

export default function PassengersInputModal ({ title, isVisible, setIsVisible, state }) {
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
      {Object.entries(state).map(entry => {
        console.log(entry)
        return (
          <div>
            hey
          </div>
        )
      })}
    </Modal>
  )
}