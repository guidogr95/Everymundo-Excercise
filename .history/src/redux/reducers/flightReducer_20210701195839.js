const initialState = {
    geo: {
      origin: '',
      desination: ''
    },
    date: {
      departure: '',
      return: '',
    }
};

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
    case '@date/update-return':
      return {
          ...state,
          date: {
          ...state.date,
          return: action.payload
        }
      }
    default: 
      return state;
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
export const dateUpdateReturn = (payload) => {
  return {
    type: '@date/update-return',
    payload
  }
}
