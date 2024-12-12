import './App.css';

import { lazy,Suspense } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const Home = lazy(() => import('./Home/Home.jsx'));
const Shop = lazy(()=> import('./Shop/Shop.jsx'));

function App() {

  return <div className="FirstWrapper">
  <Router>
    <Suspense fallback={<div>Loading...</div>}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>

    </Suspense>
  </Router>
  </div>

}

export default App;
