import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
// components
import FlightType from 'src/components/BookingMask/FlightsTab/FlightType'
// redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { flightInitialState, errorsInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
const store = mockStore({
  flight: flightInitialState,
  errors: errorsInitialState
})

describe('<FlightType/>', () => {
  let component

  beforeEach(() => {
    component = render(<Provider store={store}><FlightType/></Provider>)
  })

  test('renders content', () => {
    expect(component).toBeTruthy()
  })

  test('renders the input', () => {
    expect(screen.getByRole('checkbox', { name: 'One-way' })).toBeInTheDocument()
  })

  test('changes state of checkbox', async () => {
    const checkbox = component.getByRole('checkbox', { name: 'One-way' })
    expect(checkbox).not.toBeChecked()
    fireEvent.change(checkbox, { target: { checked: true } })
    expect(checkbox).toBeChecked()
  })
})

