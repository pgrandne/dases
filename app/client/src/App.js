import "./App.css";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from './components/NavbarComp';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Ajout from './pages/Ajout';
import Ressource from './pages/Ressource';
import Acces from './pages/Acces';

const App = () => {
  const [did, setDid] = useState({});
  const [isConnected, setConnectedState] = useState(false);
  const [vc, setVc] = useState({});

  return (
    <div className="App">
      <NavbarComp
        did={did}
        setDid={setDid}
        isConnected={isConnected}
        setConnectedState={setConnectedState}
        vc={vc}
        setVc={setVc}
      />
      <Routes>
        <Route path="/" element={<Accueil
          did={did}
          isConnected={isConnected}
          vc={vc}
        />}
        />
        <Route path="ajout" element={<Ajout
          did={did}
          vc={vc}
          isConnected={isConnected}
        />} />
        <Route path="ressource" element={<Ressource />} />
        <Route path="acces" element={<Acces did={did} />} />
      </Routes>
    </div>
  );
}

export default App;