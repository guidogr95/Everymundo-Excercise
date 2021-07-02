import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
// assets
// components
import FlightsTab from 'src/components/BookingMask/FlightsTab'
// redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { flightInitialState, errorsInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
const store = mockStore({
  flight: flightInitialState,
  errors: errorsInitialState
})

describe('<BookingMask/>', () => {
  let component

  beforeEach(() => {
    component = render(<Provider store={store}><FlightsTab/></Provider>)
  })

  test('renders content', () => {
    expect(component).toBeTruthy()
    // component.container.querySelector('section.bookingmask')  
  })

  test('renders the basic fields', () => {
    expect(screen.getRoleBy('combobox', { id: 'fromInput' })).toBeInTheDocument()
  })

  // test('renders tabs', () => {
  //   component.container.querySelector('ul.bookingmask__nav')
  //   for (const tab of tabs) {
  //     component.getByText(tab.name)
  //   }
  // })
})

