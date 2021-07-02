// assets
import { IoIosAirplane, IoMdGitCommit, IoIosCar, IoMdBed } from 'react-icons/io'
// components
import EmptyTab from './EmptyTab'
import FlightsTab from './FlightsTab'
import BookingMask from 'src/components/BookingMask'

import 'antd/dist/antd.css';
import './app.scss';

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

function App() {
  return (
    <div className="App">
      <div className="flightmanager-container container" >
        <BookingMask tabs={tabs} />
      </div>
    </div>
  );
}

export default App;
