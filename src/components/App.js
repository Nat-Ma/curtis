import React, { useRef, useEffect, useState } from 'react'
import Home from './Home'
import NewWarning from './NewWarning'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
// import mapboxgl from '!mapbox-gl';

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-warning">New Warning</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/new-warning' element={<NewWarning />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App
