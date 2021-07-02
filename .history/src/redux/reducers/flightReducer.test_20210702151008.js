import { flightInitialState } from './states'
import {
  flightReducer,
  geoUpdateOrigin,
  geoUpdateDestination,
  dateUpdateDeparture,
  dateUpdateToReturn,
  passUpdateAdd,
  passUpdateSubtract
} from './flightReducer'

describe('flightReducer', () => {

  test('returns new state with updated origin', () => {
    const newState = flightReducer(flightInitialState, geoUpdateOrigin('UIO'))
    expect(newState.geo.origin).toEqual('UIO')
  })

  test('returns new state with updated destination', () => {
    const newState = flightReducer(flightInitialState, geoUpdateDestination('UIO'))
    expect(newState.geo.destination).toEqual('UIO')
  })

  test('returns new state with updated departure date', () => {
    const newState = flightReducer(flightInitialState, dateUpdateDeparture('2025-12-12'))
    expect(newState.date.departure).toEqual('2025-12-12')
  })

  test('returns new state with updated return date', () => {
    const newState = flightReducer(flightInitialState, dateUpdateToReturn('2025-12-12'))
    expect(newState.date.toReturn).toEqual('2025-12-12')
  })

  test('returns new state with updated number of specific passenger type', () => {
    let passengerType = 'adults'
    let initialNumber = flightInitialState.passengers[passengerType].value
    let newState = flightReducer(flightInitialState, passUpdateAdd(passengerType))
    expect(newState.passengers[passengerType].value).toEqual(initialNumber + 1)

    passengerType = 'children'
    initialNumber = flightInitialState.passengers[passengerType].value
    newState = flightReducer(flightInitialState, passUpdateAdd(passengerType))
    expect(newState.passengers[passengerType].value).toEqual(initialNumber + 1)

    passengerType = 'infants'
    initialNumber = flightInitialState.passengers[passengerType].value
    newState = flightReducer(flightInitialState, passUpdateAdd(passengerType))
    expect(newState.passengers[passengerType].value).toEqual(initialNumber + 1)
  })

})