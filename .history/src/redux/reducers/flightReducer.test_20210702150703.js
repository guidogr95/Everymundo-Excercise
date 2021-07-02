import { flightInitialState } from './states'
import {
  flightReducer,
  geoUpdateOrigin,
  geoUpdateDestination,
  dateUpdateDeparture,
  dateUpdateToReturn
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

})