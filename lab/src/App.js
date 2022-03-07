import './App.css';
import './style/main.css'
import './style/dashboard.css'
import Header from './component/Header';
import Catalog from './page/Catalog';


const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Catalog />


    </div>
  );
}

export default App;
