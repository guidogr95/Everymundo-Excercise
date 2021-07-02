import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
// assets
// components
import AirportInputs from 'src/components/BookingMask/FlightsTab/AirportInputs'
// redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { flightInitialState, errorsInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
const store = mockStore({
  flight: flightInitialState,
  errors: errorsInitialState
})

describe('<AirportInputs/>', () => {
  let component
  beforeEach(() => {
    component = render(<Provider store={store}><AirportInputs /></Provider>)
  })

  test('renders content', () => {
    expect(component).toBeTruthy()
  })

  test('renders the inputs', () => {
    expect(screen.getByRole('combobox', { name: 'From' })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'To' })).toBeInTheDocument()
  })
})

