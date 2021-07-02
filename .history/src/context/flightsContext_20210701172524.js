import { createContext, useContext } from 'react'

const flightsContext = createContext()

export function ProvideFlights ({ children }) {
  const auth = useProvideFlights()
  return <flightsContext.Provider value={auth}>{children}</flightsContext.Provider>
}

export const useFlightsUtils = () => {
  return useContext(flightsContext)
}

function useProvideFlights () {
  return {
  }
}
