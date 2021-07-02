import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const antIcon = <LoadingOutlined className="customspin" spin />

const CustomSpin = () => <Spin indicator={antIcon} />

export default CustomSpin