import { flightInitialState } from './states'
import {
  flightReducer,
  geoUpdateOrigin,
  geoUpdateDestination
} from './flightReducer'

describe('flightReducer', () => {
  test('returns new state with updated origin', () => {
    const newState = flightReducer(flightInitialState, geoUpdateOrigin('UIO'))
    expect(newState.geo.origin).toEqual('UIO')
  })
})