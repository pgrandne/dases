import './App.css';
import './style/main.css';
import './style/dashboard.css';

import { useState } from 'react';
import NoMetamask from './page/NoMetamask'
import Catalog from './page/Catalog';
import Dashboard from './page/Dashboard';
// import VerifiableCredential from './component/VerifiableCredential';



const App = () => {
  const [isConnected, setConnectedState] = useState(false)
  // const [isOnboarded, setOnboardedState] = useState(false)
  const [noMetamask, setNoMetamaskState] = useState(false)

  return (
    <div className="App">
      {!isConnected && noMetamask && <NoMetamask setNoMetamaskState={setNoMetamaskState} />}
      {!isConnected && !noMetamask && <Catalog setConnectedState={setConnectedState} setNoMetamaskState={setNoMetamaskState} />}
      {/* {isConnected && !isOnboarded && <VerifiableCredential />} */}
      {isConnected && <Dashboard setConnectedState={setConnectedState} />}

    </div>
  );
}

export default App;
