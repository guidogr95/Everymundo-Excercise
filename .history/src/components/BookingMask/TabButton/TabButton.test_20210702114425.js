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
  let button
  const mockHandler = jest.fn()
  let activeTab = ""

  beforeEach(() => {
    component = render(<TabButton name={tab.name} activeTab={activeTab} onClick={mockHandler} icon={tab.icon} />)
    button = component.getByText(tab.name)
  })

  test('renders content', () => {
    expect(button).toBeInTheDocument()
  })

  test('clicking the button calls event handler once', () => {  fireEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  test('if tab is not active styles are different', () => {
    expect(component.container.querySelector('.active')).toBeNull()
  })
  test('if tab is active styles are different', () => {
    activeTab = tab.name
    // component = render(<TabButton name={tab.name} activeTab={activeTab} onClick={mockHandler} icon={tab.icon} />)
    expect(component.container.querySelector('.active')).toBeTruthy()
  })
})