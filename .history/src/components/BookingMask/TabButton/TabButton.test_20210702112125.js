import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
// assets
import { IoIosAirplane } from 'react-icons/io'
// components
import TabButton from 'src/components/BookingMask/TabButton'

test('renders content', () => {
  const tab = [
    {
      name: 'Flights',
      icon: <IoIosAirplane />
    }
  ]
  render(<TabButton name={tab.name} onClick={() => {}} icon={tab.icon} />)
})

test('clicking the button calls event handler once', () => {
  const tab = [
    {
      name: 'Flights',
      icon: <IoIosAirplane />
    }
  ]
  const mockHandler = jest.fn()

  const component = render(<TabButton name={tab.name} onClick={mockHandler} icon={tab.icon} />)
  const button = component.getByText(tab.name)

  fireEvent.click(button)
  expect(mockHandler).toHaveBeenCalledTimes(1)
})

// test('renders tabs', () => {
//   const component = render(<Provider store={store}><BookingMask tabs={tabs} /></Provider>)
//   component.container.querySelector('ul.bookingmask__nav')
//   for (const tab of tabs) {
//     component.getByText(tab.name)
//   }
// })

// test('renders tabs content', () => {
//   const component = render(<Provider store={store}><BookingMask tabs={tabs} /></Provider>)
//   component.container.querySelector('div.bookingmask__tab')
// })

