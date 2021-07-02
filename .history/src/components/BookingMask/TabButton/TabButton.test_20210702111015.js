import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
// assets
import { IoIosAirplane } from 'react-icons/io'
// components
import TabButton from 'src/components/BookingMask/TabButton'

const tab = [
  {
    name: 'Flights',
    icon: <IoIosAirplane />
  }
]

test('renders content', () => {
  render(<TabButton name={tab.name} onClick={() => {}} icon={tab.icon} />)
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

