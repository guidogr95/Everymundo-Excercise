
// utils
import { Button, Form } from 'antd';

export default function SubmitFlight () {
  return (
    <Form.Item>
    <Button
      size="large"
      type="primary"
      htmlType="submit"
    >
      Search flights
    </Button>
      </Form.Item>
  )
}