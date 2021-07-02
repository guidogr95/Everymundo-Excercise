import React from 'react'

const FlightsTab = ({ name, activeTab }) => {
  return (
    <div className={`bookingmask__tab${activeTab === name ? ' active' : ''}`} >
      some stuff
    </div>
  )
}

export default FlightsTab