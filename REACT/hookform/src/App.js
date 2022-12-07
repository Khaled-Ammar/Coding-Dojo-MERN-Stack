import React from 'react';
import './App.css';

import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <UserForm  username={"Khaled"}  email={"Ammar@gmail.com"} password={1234567}  />
    </div>
  );
}

export default App;
