import React, { useState } from 'react'
// styles
import './bookingmask.scss'
// assets
import { IoIosAirplane, IoMdGitCommit, IoIosCar, IoMdBed } from 'react-icons/io'
// components
// import Empty from 'empty'

const BookingMask = () => {
  const tabs = [
    {
      name: 'Flights',
      icon: <IoIosAirplane />,
      // component: <Empty />
    },
    {
      name: 'Stopover',
      icon: <IoMdGitCommit />,
      // component: <Empty />
    },
    {
      name: 'Rental car',
      icon: <IoIosCar />,
      // component: <Empty />
    },
    {
      name: 'Hotel',
      icon: <IoMdBed />,
      // component: <Empty />
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
          >
            {tab.icon}<span>{tab.name}</span>
          </button>
        )}
      </ul>
    </section>
  )
}

export default BookingMask