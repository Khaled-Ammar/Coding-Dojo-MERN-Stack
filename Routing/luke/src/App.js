import logo from './logo.svg';
import './App.css';
import LukeApi1 from './comp/LukeApi1';
import React , {useState} from 'react';
import { Router } from '@reach/router';
import LukeApi2 from './comp/LukeApi2';

function App() {
  return (
    <div className="App">
      <LukeApi1/>
      <Router>
        <LukeApi2 path={"/:op/:id"} />
      </Router>
    </div>
  );
}

export default App;
