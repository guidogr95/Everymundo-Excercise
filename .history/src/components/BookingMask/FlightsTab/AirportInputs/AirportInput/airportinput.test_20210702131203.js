import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
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

const dummyData = [
  {
    iata: 'UIO',
    city: 'Quito',
    name: 'Aeropuerto Mariscal Sucre',
    country: {
      name: 'Ecuador'
    }
  }
]

const name = "From"

describe('<AirportInputs/>', () => {
  let component
  const mockHandler = jest.fn()

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <AirportInput
          dummyData={dummyData}
          isTest={true}
          label={name}
          id={name}
          setValue={mockHandler}
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

  test('submits correct value on click', () => {
    screen.getByText(dummyData.iata)
  })
})

