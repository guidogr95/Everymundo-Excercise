import { useState } from 'react'
// assets
import { IoIosAirplane, IoMdGitCommit, IoIosCar, IoMdBed } from 'react-icons/io'
// components
import EmptyTab from './EmptyTab'
import FlightsTab from './FlightsTab'

import './bookingmask.scss'

const BookingMask = () => {
  const tabs = [
    {
      name: 'Flights',
      icon: <IoIosAirplane />,
      component: <FlightsTab />
    },
    {
      name: 'Stopover',
      icon: <IoMdGitCommit />,
      component: <EmptyTab />
    },
    {
      name: 'Rental car',
      icon: <IoIosCar />,
      component: <EmptyTab />
    },
    {
      name: 'Hotel',
      icon: <IoMdBed />,
      component: <EmptyTab />
    }
  ]

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