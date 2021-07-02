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
import { flightInitialState, errorsInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
const store = mockStore({
  flight: flightInitialState,
  errors: errorsInitialState
})

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

test('renders content', () => {
  render(<Provider store={store}><BookingMask tabs={tabs} /></Provider>)
})

test('renders tabs', () => {
  const component = render(<Provider store={store}><BookingMask tabs={tabs} /></Provider>)
  const navTabs = component.container.querySelector('ul')
  console.log(navTabs)
  for (const tab of tabs) {
    navTabs.container.getByText(tab.name)
  }
})