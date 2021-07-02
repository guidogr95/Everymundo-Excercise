import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
// assets
// components
import DateInput from 'src/components/BookingMask/FlightsTab/DateInputs/DateInput'
// redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { flightInitialState, errorsInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
const store = mockStore({
  flight: flightInitialState,
  errors: errorsInitialState
})

const name = "Departure"

describe('<DateInput/>', () => {
  let component

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <DateInput
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
    expect(screen.getByRole('textbox', { name })).toBeInTheDocument()
  })
})

