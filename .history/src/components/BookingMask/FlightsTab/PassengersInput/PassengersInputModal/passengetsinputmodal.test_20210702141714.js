import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
// components
import PassengersInputModal from 'src/components/BookingMask/FlightsTab/PassengersInput/PassengersInputModal'
// redux
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { flightInitialState, errorsInitialState } from 'src/redux/reducers/states'

const mockStore = configureStore()
const store = mockStore({
  flight: flightInitialState,
  errors: errorsInitialState
})

describe('<PssengersInputModal/>', () => {
  let component
  const mockHandler = jest.fn()
  beforeEach(() => {
    component = render(<Provider store={store}><PassengersInputModal title='Test title' isVisible={true} setIsVisible={mockHandler} /></Provider>)
  })

  test('renders content', () => {
    expect(component).toBeTruthy()
  })

  test('renders the title', () => {
    expect(component.getByText('Test title')).toBeInTheDocument()
  })
})

