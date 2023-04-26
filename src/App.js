
import './App.css';
import Home from './Component/Home/Home';
import Database from './Component/Data/db.json';
import TourDetails from './Component/TourDetails/TourDetails';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headers/>
      <Routes>
      <Route  path='/' element={ <Home data ={Database}/>}>
        </Route>
        <Route path='city/:id' element={<TourDetails datas={Database}/>} > 
        </Route>
     </Routes>
<Footer/>
      </header>
    </div>
  );
}

export default App;
