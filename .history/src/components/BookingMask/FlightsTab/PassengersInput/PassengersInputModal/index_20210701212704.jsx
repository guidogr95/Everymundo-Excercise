// utils
import { Modal, Button } from 'antd'
// assets
import { IoMdClose } from 'react-icons/io'

export default function PassengersInputModal ({ title, isVisible, setIsVisible }) {
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
      <p>sdklaskdal</p>
      <p>sdklaskdal</p>
      <p>sdklaskdal</p>
      <p>sdklaskdal</p>
      <p>sdklaskdal</p>
      <p>sdklaskdal</p>
      <p>sdklaskdal</p>
      <p>sdklaskdal</p>
    </Modal>
  )
}