import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter as Router} from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import {Provider} from 'react-redux';

const store = ConfigureStore();
function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <div className="main">
          <Main/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
