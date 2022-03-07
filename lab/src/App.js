import './App.css';
import './style/main.css';
import './style/dashboard.css';

import { useState } from 'react';
import Catalog from './page/Catalog';
import Dashboard from './page/Dashboard';



const App = () => {
  const [isConnected, setConnectedState] = useState(false)

  return (
    <div className="App">
      {!isConnected && <Catalog setConnectedState={setConnectedState}/>}
      {isConnected && <Dashboard setConnectedState={setConnectedState}/>}
    </div>
  );
}

export default App;
