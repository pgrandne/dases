import "./App.css";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from './components/NavbarComp';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Ajout from './pages/Ajout';
import Ressource from './pages/Ressource';

const App = () => {
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [isConnected, setConnectedState] = useState(false);

  return (
    <div className="App">
      <NavbarComp
        defaultAccount={defaultAccount}
        setDefaultAccount={setDefaultAccount}
        isConnected={isConnected}
        setConnectedState={setConnectedState}
      />
      <Routes>
        <Route path="/" element={<Accueil
          defaultAccount={defaultAccount}
          isConnected={isConnected}
        />}
        />
        <Route path="ajout" element={<Ajout
          defaultAccount={defaultAccount}
          isConnected={isConnected}
        />} />
        <Route path="ressource" element={<Ressource />} />
      </Routes>
    </div>
  );
}

export default App;