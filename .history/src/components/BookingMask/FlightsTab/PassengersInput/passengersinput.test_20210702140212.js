import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
// components
import PassengersInput from 'src/components/BookingMask/FlightsTab/PassengersInput'
// redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { flightInitialState, errorsInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
const store = mockStore({
  flight: flightInitialState,
  errors: errorsInitialState
})

describe('<PssengersInput/>', () => {
  let component
  const name = "Travellers"
  beforeEach(() => {
    component = render(<Provider store={store}><PassengersInput label={name} id={name} /></Provider>)
  })

  test('renders content', () => {
    expect(component).toBeTruthy()
  })

  test('renders the inputs', () => {
    expect(screen.getByRole('textbox', { name: 'Travellers' })).toBeInTheDocument()
  })
})

