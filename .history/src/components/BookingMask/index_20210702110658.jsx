import { useState } from 'react'
// components
import TabButton from './TabButton'

import './bookingmask.scss'

const BookingMask = ({ tabs }) => {

  const [activeTab, setActiveTab] = useState(tabs[0].name)
  const handleTab = name => setActiveTab(name)

  return (
    <section className="bookingmask" >
      <ul className="bookingmask__nav" >
        {tabs.map(tab =>
          <TabButton 
            name={tab.name}
            onClick={handleTab}
            key={tab.name}
            activeTab={activeTab}
            icon={tab.icon}
          />
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