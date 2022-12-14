import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link , Routes ,Route } from '@reach/router';
import First from './comp/First';
import Seco from './comp/Seco';
import { Router } from '@reach/router';
import Therd from './comp/Therd';

function App() {
  return (

    <div className="App">
      <Router>
      <First path="/home" />
      <Seco path = "/:str"/>
      <Therd path = "/:str/:bcolor/:color"/>
      </Router>
    </div>
  );
}

export default App;
