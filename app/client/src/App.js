import "./App.css";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from './components/NavbarComp';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Ajout from './pages/Ajout';
import Donnee from './pages/Donnee';
import Ressource from './pages/Ressource';
import Service from './pages/Service';

function App() {

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
        <Route path="donnee" element={<Donnee />} />
        <Route path="ressource" element={<Ressource />} />
        <Route path="service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;