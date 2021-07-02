import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
// assets
// components
import AirportInput from 'src/components/BookingMask/FlightsTab/AirportInputs/AirportInput'
// redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { flightInitialState, errorsInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
const store = mockStore({
  flight: flightInitialState,
  errors: errorsInitialState
})

const name = "From"

describe('<AirportInput/>', () => {
  let component

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <AirportInput
          label={name}
          id={name}
        />
      </Provider>
    )
  })

  test('renders content', () => {
    expect(component).toBeTruthy()
  })

  test('renders the input', () => {
    expect(screen.getByRole('combobox', { name })).toBeInTheDocument()
  })
})

