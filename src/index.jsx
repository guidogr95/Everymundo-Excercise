import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// redux
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { flightReducer } from 'src/redux/reducers/flightReducer'
import { errorsReducer } from 'src/redux/reducers/errorsReducer'

const reducers = combineReducers({
  flight: flightReducer,
  errors: errorsReducer
})
const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
