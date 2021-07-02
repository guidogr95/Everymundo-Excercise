const initialState = {
    geo: {
      origin: '',
      desination: ''
    },
    date: {
      from: '',
      to: '',
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
    case '@date/update-from':
      return {
          ...state,
          date: {
          ...state.date,
          from: action.payload
        }
      }
    case '@date/update-to':
      return {
          ...state,
          date: {
          ...state.date,
          to: action.payload
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
    action: '@geo/update-origin',
    payload
  }
}
export const geoUpdateDestination = (payload) => {
  return {
    action: '@geo/update-destination',
    payload
  }
}
// @date
export const dateUpdateFrom = (payload) => {
  return {
    action: '@date/update-from',
    payload
  }
}
export const dateUpdateTo = (payload) => {
  return {
    action: '@date/update-to',
    payload
  }
}
