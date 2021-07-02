import { useState } from 'react'

import './bookingmask.scss'

const BookingMask = (tabs) => {

  const [activeTab, setActiveTab] = useState(tabs[0].name)
  const handleTab = name => setActiveTab(name)

  return (
    <section className="bookingmask" >
      <ul className="bookingmask__nav" >
        {tabs.map(tab =>
          <button
            className={activeTab === tab.name ? 'active' : ''}
            onClick={() => handleTab(tab.name)}
            key={tab.name}
          >
            {tab.icon}<span>{tab.name}</span>
          </button>
        )}
      </ul>
      <div className="bookingmask__tabs-wrapper" >
          {tabs.map(tab => 
            <div
              key={tab.name}
              className={`bookingmask__tab${activeTab === tab.name ? ' active' : ''}`}
            >
              {tab.component}
            </div>
          )}
      </div>
    </section>
  )
}

export default BookingMask