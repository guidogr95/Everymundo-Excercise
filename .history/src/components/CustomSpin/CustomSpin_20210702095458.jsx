import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import './customspin.scss'

const antIcon = <LoadingOutlined className="customspin" spin />

const CustomSpin = (props) => <Spin indicator={antIcon} {...props} />

export default CustomSpin