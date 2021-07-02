import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
// assets
import { IoIosAirplane } from 'react-icons/io'
// components
import TabButton from 'src/components/BookingMask/TabButton'


describe('<TabButton />', () => {
  const tab = {
    name: 'Flights',
    icon: <IoIosAirplane />
  }

  let component
  const mockHandler = jest.fn()
  let activeTab = ""

  beforeEach(() => {
    component = render(<TabButton name={tab.name} activeTab={activeTab} onClick={mockHandler} icon={tab.icon} />)
  })

  test('renders content', () => {
    component.getByText(tab.name)
  })

  test('clicking the button calls event handler once', () => {  
    const button = component.getByText(tab.name)
  
    fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  test('if tab is not active styles are different', () => {
    expect(component).toHaveStyle('color: #fff')
  })
})