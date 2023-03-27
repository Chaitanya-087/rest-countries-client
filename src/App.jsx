import React, { lazy } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {SharedLayout} from './pages';

const Home = lazy(() => import('./pages/home'))
const SingleCountry = lazy(() => import('./pages/singleCountry'))

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path=":name" element={<SingleCountry/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
