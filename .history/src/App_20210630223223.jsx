// utils
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// styles
import 'antd/dist/antd.css';
import './app.scss';
// components
import BookingMask from 'src/components/BookingMask'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="flightmanager-container container" >
          <BookingMask />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
