import "./App.css";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from './components/NavbarComp';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Ajout from './pages/Ajout';
import Ressource from './pages/Ressource';

const App = () => {
  const [didDocument, setDidDocument] = useState({});
  const [isConnected, setConnectedState] = useState(false);

  return (
    <div className="App">
      <NavbarComp
        didDocument={didDocument}
        setDidDocument={setDidDocument}
        isConnected={isConnected}
        setConnectedState={setConnectedState}
      />
      <Routes>
        <Route path="/" element={<Accueil
          didDocument={didDocument}
          isConnected={isConnected}
        />}
        />
        <Route path="ajout" element={<Ajout
          didDocument={didDocument}
          isConnected={isConnected}
        />} />
        <Route path="ressource" element={<Ressource />} />
      </Routes>
    </div>
  );
}

export default App;