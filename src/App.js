import { Provider } from 'react-redux';
import './App.css';
import QuoteGenerator from './QuoteGenerator';
import store from './Redux/store';

function App() {

  return (
    <Provider store={store}>
      <div className='quote-box'>
        <QuoteGenerator />
      </div>
    </Provider>
  );
}

export default App;
