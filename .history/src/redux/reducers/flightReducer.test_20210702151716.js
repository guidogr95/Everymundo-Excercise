import { flightInitialState } from './states'
import {
  flightReducer,
  geoUpdateOrigin,
  geoUpdateDestination,
  dateUpdateDeparture,
  dateUpdateToReturn,
  passUpdateAdd,
  passUpdateSubtract,
  typeUpdateIsOneWay
} from './flightReducer'

describe('flightReducer/@geo', () => {

  test('returns new state with updated origin', () => {
    const newState = flightReducer(flightInitialState, geoUpdateOrigin('UIO'))
    expect(newState.geo.origin).toEqual('UIO')
  })

  test('returns new state with updated destination', () => {
    const newState = flightReducer(flightInitialState, geoUpdateDestination('UIO'))
    expect(newState.geo.destination).toEqual('UIO')
  })

})

describe('flightReducer/@date', () => {

  test('returns new state with updated departure date', () => {
    const newState = flightReducer(flightInitialState, dateUpdateDeparture('2025-12-12'))
    expect(newState.date.departure).toEqual('2025-12-12')
  })

  test('returns new state with updated return date', () => {
    const newState = flightReducer(flightInitialState, dateUpdateToReturn('2025-12-12'))
    expect(newState.date.toReturn).toEqual('2025-12-12')
  })
})

describe('flightReducer/@passengers', () => {

  test('returns new state with updated number of specific passenger type on addition', () => {
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

  test('returns new state with updated number of specific passenger type no subtraction', () => {
    const newInitialState = {
      ...flightInitialState,
      passengers: {
        adults: {
          ...flightInitialState.passengers.adults,
          value: 4
        },
        children: {
          ...flightInitialState.passengers.children,
          value: 4
        },
        infants: {
          ...flightInitialState.passengers.infants,
          value: 4
        }
      }
    }

    let passengerType = 'adults'
    let initialNumber = newInitialState.passengers[passengerType].value
    let newState = flightReducer(newInitialState, passUpdateSubtract(passengerType))
    expect(newState.passengers[passengerType].value).toEqual(initialNumber - 1)

    passengerType = 'children'
    initialNumber = newInitialState.passengers[passengerType].value
    newState = flightReducer(newInitialState, passUpdateSubtract(passengerType))
    expect(newState.passengers[passengerType].value).toEqual(initialNumber - 1)

    passengerType = 'infants'
    initialNumber = newInitialState.passengers[passengerType].value
    newState = flightReducer(newInitialState, passUpdateSubtract(passengerType))
    expect(newState.passengers[passengerType].value).toEqual(initialNumber - 1)
  })
})


describe('flightReducer/@type', () => {
  test('returns new state with updated value for type of flight', () => {
    const newState = flightReducer(flightInitialState, typeUpdateIsOneWay)
    const originalValue = flightInitialState.isOneWay
    expect(newState.isOneWay).toEqual(!originalValue)
  })
})