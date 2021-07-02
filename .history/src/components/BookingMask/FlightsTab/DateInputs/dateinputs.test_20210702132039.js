import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
// assets
// components
import DateInputs from 'src/components/BookingMask/FlightsTab/DateInputs'
// redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { flightInitialState, errorsInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
const store = mockStore({
  flight: flightInitialState,
  errors: errorsInitialState
})

describe('<DateInputs/>', () => {
  let component

  beforeEach(() => {
    component = render(<Provider store={store}><DateInputs/></Provider>)
  })

  test('renders content', () => {
    expect(component).toBeTruthy()
  })

  test('renders the input', () => {
    expect(screen.getByRole('textbox', { name: 'Departure date' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Return date' })).toBeInTheDocument()
  })
})

