import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
  <div className="App">
    <PersonCard  firstName={"Khaled"}  lastName={"Ammar"} age={24} hairColor={"black"} />

  </div>
  );
}

export default App;

