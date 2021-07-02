const initialState = {
    errors: []
}

export const errorsReducer = (state = initialState, action) => {
  switch(action.type){
    case '@errors/update-add':
      return {
          ...state,
          errors: action.payload
      }
    case '@errors/update-remove':
      return initialState
    default: 
      return state
    }
}

// action creators
// @errors
export const sendErrors = (payload) => {
  return {
    type: '@geo/update-add',
    payload
  }
}
export const removeErrors = () => {
  return {
    type: '@geo/update-remove'
  }
}