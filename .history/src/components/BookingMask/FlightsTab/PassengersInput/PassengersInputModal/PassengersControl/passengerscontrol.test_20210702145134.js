import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
// components
import PassengersControl from 'src/components/BookingMask/FlightsTab/PassengersInput/PassengersInputModal/PassengersControl'
// redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { flightInitialState, errorsInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
const store = mockStore({
  flight: flightInitialState,
  errors: errorsInitialState
})

describe('<PassengersControl/>', () => {
  let component
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <PassengersControl
          passengerType='adults'
          data={flightInitialState.passengers.adults}
        />
      </Provider>
    )
  })

  test('renders content', () => {
    expect(component).toBeTruthy()
  })

  test('clicking the add button adds one passenger', () => {  
    const addButton = screen.getByRole('button', { name: 'add' })
    const passengers = component.container.querySelector('.pass-number')
    console.log(passengers.textContent)
    fireEvent.click(addButton)
    // expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})