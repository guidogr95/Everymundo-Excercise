export const flightInitialState = {
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

export const errorsInitialState = {
  errors: []
}