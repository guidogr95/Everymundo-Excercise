import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
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
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox, { target: { checked: true } })
    await waitFor(() => expect(checkbox.checked).toEqual(true) )
  })
})

