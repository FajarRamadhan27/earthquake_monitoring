import './App.scss'
import { Navbar } from './components';
import { LatestActivity, Map } from './container';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LatestActivity/>
      <Map/>
    </div>
  );
}

export default App;
