const initialState = {
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
        plural: 'Children'
      },
      infants: {
        value: 0,
        singular: 'Infant',
        plural: 'Infants'
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
            value: state.passengers.adults.value > (state.passengers.adults.min || 0) ? returnMinusOne(state.passengers.adults.value) : 0
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
              value: state.passengers.children.value > (state.passengers.children.min || 0) ? returnMinusOne(state.passengers.children.value) : 0
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
              value: state.passengers.infants.value > (state.passengers.infants.min || 0) ? returnMinusOne(state.passengers.infants.value) : 0
            }
          }
        }
    default: 
      return state;
  }
}

// helpers
const returnPlusOne = (val) => val + 1
const returnMinusOne = (val) => val - 1

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
  console.log(passengerType)
  return {
    type: `@passengers/update-${passengerType}--add`
  }
}
export const passUpdateSubtract = (passengerType) => {
  return {
    type: `@passengers/update-${passengerType}--subtract`
  }
}
