import 'antd/dist/antd.css';
import './app.scss';
// components
import BookingMask from 'src/components/BookingMask'

function App() {
  return (
    <div className="App">
      <div className="flightmanager-container container" >
        <BookingMask />
      </div>
    </div>
  );
}

export default App;
