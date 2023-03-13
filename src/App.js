import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss'
import { Navbar } from './components';
import { Activity, Map } from './container';
import { getDevicesPosition, setDevice } from './utils';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    getDevicesPosition((res) => {
      dispatch(setDevice(res))
    })
  }, [])


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
