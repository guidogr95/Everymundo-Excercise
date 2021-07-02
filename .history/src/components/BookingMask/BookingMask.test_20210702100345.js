import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
// assets
import { IoIosAirplane, IoMdGitCommit, IoIosCar, IoMdBed } from 'react-icons/io'
// components
import EmptyTab from 'src/components/BookingMask/EmptyTab'
import FlightsTab from 'src/components/BookingMask/FlightsTab'
import BookingMask from 'src/components/BookingMask'

test('renders content', () => {
  const tabs = [
    {
      name: 'Flights',
      icon: <IoIosAirplane />,
      component: <FlightsTab />
    },
    {
      name: 'Stopover',
      icon: <IoMdGitCommit />,
      component: <EmptyTab />
    },
    {
      name: 'Rental car',
      icon: <IoIosCar />,
      component: <EmptyTab />
    },
    {
      name: 'Hotel',
      icon: <IoMdBed />,
      component: <EmptyTab />
    }
  ]

  const component = render(<BookingMask tabs={tabs} />)

  console.log(component)
})