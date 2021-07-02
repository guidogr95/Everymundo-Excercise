import { errorsInitialState as initialState } from './state'

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
    type: '@errors/update-add',
    payload
  }
}
export const removeErrors = () => {
  return {
    type: '@errors/update-remove'
  }
}