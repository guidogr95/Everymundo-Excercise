import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
// assets
import { IoIosAirplane, IoMdGitCommit, IoIosCar, IoMdBed } from 'react-icons/io'
// components
import EmptyTab from 'src/components/BookingMask/EmptyTab'
import FlightsTab from 'src/components/BookingMask/FlightsTab'
import BookingMask from 'src/components/BookingMask'
// redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { flightInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
let store,wrapper

store = mockStore(flightInitialState)

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


  const component = render(<Provider store={store}><BookingMask tabs={tabs} /></Provider>)

  console.log(component)
})