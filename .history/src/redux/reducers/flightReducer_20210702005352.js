// utils
import isEmpty from 'lodash/isEmpty'

const initialState = {
    isOneWay: false,
    geo: {
      origin: '',
      desination: ''
    },
    date: {
      departure: '',
      toReturn: '',
    },
    passengers: {
      adults: {
        value: 1,
        singular: 'Adult',
        plural: 'Adults',
        min: 1
      },
      children: {
        value: 0,
        singular: 'Child',
        plural: 'Children',
        legend: '(2 to 11 years)'
      },
      infants: {
        value: 0,
        singular: 'Infant',
        plural: 'Infants',
        legend: '(Up to 2 years)'
      }
    }
}

export const flightReducer = (state = initialState, action) => {
  switch(action.type){
    case '@geo/update-origin':
      return {
          ...state,
          geo: {
          ...state.geo,
          origin: action.payload
        }
      }
    case '@geo/update-destination':
      return {
          ...state,
          geo: {
          ...state.geo,
          destination: action.payload
        }
      }
    case '@date/update-departure':
      return {
          ...state,
          date: {
          ...state.date,
          departure: action.payload
        }
      }
    case '@date/update-to-return':
      return {
          ...state,
          date: {
          ...state.date,
          toReturn: action.payload
        }
      }
    case '@passengers/update-adults--add':
      return {
          ...state,
          passengers: {
          ...state.passengers,
          adults: {
            ...state.passengers.adults,
            value: returnPlusOne(state.passengers.adults.value)
          }
        }
      }
    case '@passengers/update-adults--subtract':
      return {
          ...state,
          passengers: {
          ...state.passengers,
          adults: {
            ...state.passengers.adults,
            value: returnMinusOne(state.passengers.adults.value, state.passengers.adults.min)
          }
        }
      }
    case '@passengers/update-children--add':
      return {
        ...state,
        passengers: {
          ...state.passengers,
          children: {
            ...state.passengers.children,
            value: returnPlusOne(state.passengers.children.value)
          }
        }
      }
    case '@passengers/update-children--subtract':
      return {
          ...state,
          passengers: {
          ...state.passengers,
          children: {
            ...state.passengers.children,
            value: returnMinusOne(state.passengers.children.value, state.passengers.children.min)
          }
        }
      }
    case '@passengers/update-infants--add':
      return {
        ...state,
        passengers: {
          ...state.passengers,
          infants: {
            ...state.passengers.infants,
            value: returnPlusOne(state.passengers.infants.value)
          }
        }
      }
    case '@passengers/update-infants--subtract':
      return {
          ...state,
          passengers: {
          ...state.passengers,
          infants: {
            ...state.passengers.infants,
            value: returnMinusOne(state.passengers.infants.value, state.passengers.infants.min)
          }
        }
      }
    case '@type/update-is-one-way':
      return {
          ...state,
          isOneWay: !state.isOneWay
      }
    default: 
      return state;
  }
}

// helpers
const returnPlusOne = (val) => val + 1
const returnMinusOne = (val, min) => {
  const innerMin = min || 0
  if (val - 1 < innerMin) {
    return innerMin
  } else {
    return val - 1
  }
}

// action creators
// @geo
export const geoUpdateOrigin = (payload) => {
  return {
    type: '@geo/update-origin',
    payload
  }
}
export const geoUpdateDestination = (payload) => {
  return {
    type: '@geo/update-destination',
    payload
  }
}
// @date
export const dateUpdateDeparture = (payload) => {
  return {
    type: '@date/update-departure',
    payload
  }
}
export const dateUpdateToReturn = (payload) => {
  return {
    type: '@date/update-to-return',
    payload
  }
}
// @passengers
export const passUpdateAdd = (passengerType) => {
  return {
    type: `@passengers/update-${passengerType}--add`
  }
}
export const passUpdateSubtract = (passengerType) => {
  return {
    type: `@passengers/update-${passengerType}--subtract`
  }
}
// @type
export const typeUpdateIsOneWay = () => {
  return {
    type: '@type/update-is-one-way'
  }
}
// Link creator
export const createLink = (state) => {
  const getUrl = ({ origin, destination, departure, isOneWay, adults, children, infants }) => `https://www.swiss.com/us/en/Book/Outbound/${origin}-${destination}/from-${departure}${!isOneWay ? `/to-${toReturn}` : ''}/adults-${adults}/children-${children}/infants-${infants}/class-economy/al-LX/sidmbvl`

  const errors = []
  const { geo, date, passengers, isOneWay } = state
  let { departure, toReturn } = date
  let { origin, destination } = geo
  let { adults, children, infants } = passengers

  if (isEmpty(origin)) {
    errors.push('Origin')
  }
  if (isEmpty(destination)) {
    errors.push('Destination')
  }
  if (isEmpty(departure)) {
    errors.push('Departure date')
  }
  if (isEmpty(toReturn) && !isOneWay) {
    errors.push('Return date')
  }
  if (!isEmpty(errors)) {
    return errors
  } else {
    origin = origin.split('-')[1].trim()
    destination = destination.split('-')[1].trim()
    adults = adults.value
    children = children.value
    infants = infants.value
    window.open(getUrl({
      origin,
      destination,
      departure,
      toReturn,
      isOneWay,
      adults,
      children,
      infants
    }),'_blank')
  }
}