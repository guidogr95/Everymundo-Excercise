import React from 'react'
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
  return (
    <section className="bookingmask" >
      <ul className="bookingmask__nav" >
        {tabs.map(tab => {
          return (
            <button>
              {tab.name}
            </button>
          )
        })}
      </ul>
    </section>
  )
}

export default BookingMask