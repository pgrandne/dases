import './App.css';
import './style/main.css'
import './style/dashboard.css'
import Header from './component/Header';
import Catalog from './page/Catalog';
import Footer from './component/Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
