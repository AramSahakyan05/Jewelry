import { Route, Routes} from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import PopularityPage from "./pages/PopularityPage";
import TypePage from "./pages/PopularityPage";
import GemstonePage from "./pages/PopularityPage";
import PricePage from "./pages/PopularityPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/popularity" element={<PopularityPage />}/>
        <Route path="/type" element={<TypePage />}/>
        <Route path="/gemstone" element={<GemstonePage />}/>
        <Route path="/price" element={<PricePage />}/>
      </Routes>
    </div>
  );
}

export default App;
