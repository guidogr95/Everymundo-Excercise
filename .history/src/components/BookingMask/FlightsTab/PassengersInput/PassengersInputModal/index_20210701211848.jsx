// utils
import { Modal, Button } from 'antd'

export default function PassengersInputModal ({ title, isVisible, setIsVisible }) {
  return (
    <Modal
      title={title || ''}
      centered
      visible={isVisible}
      onOk={() => setIsVisible(false)}
      footer={[
        <Button key="ok" onClick={() => setIsVisible(false)}>
          Continue
        </Button>
      ]}
    >

    </Modal>
  )
}