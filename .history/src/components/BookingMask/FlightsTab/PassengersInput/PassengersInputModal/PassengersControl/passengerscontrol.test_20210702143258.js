import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
// components
import PassengersControl from 'src/components/BookingMask/FlightsTab/PassengersInput/PassengersControl'
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
  const mockHandler = jest.fn()
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

  // test('clicking the continue button calls event handler once', () => {  
  //   const button = component.getByText('Continue')
  //   fireEvent.click(button)
  //   expect(mockHandler).toHaveBeenCalledTimes(1)
  // })
})