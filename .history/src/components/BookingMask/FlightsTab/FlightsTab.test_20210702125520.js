import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
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
  })

  test('renders the basic fields', () => {
    expect(screen.getByRole('combobox', { name: 'From' })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'To' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Departure date' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Return date' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Travellers' })).toBeInTheDocument()
  })

})

