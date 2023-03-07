import './App.scss'
import { Navbar } from './components';
import { Activity, Map } from './container';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="app__container">
        <Activity/>
        <Map/>
      </div>
    </div>
  );
}

export default App;
