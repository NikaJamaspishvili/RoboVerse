import './App.css';

import { lazy,Suspense } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const Home = lazy(() => import('./Home/Home.jsx'));

function App() {

  return <div className="FirstWrapper">
  <Router>
    <Suspense fallback={<div>Loading...</div>}>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </Suspense>
  </Router>
  </div>

}

export default App;
