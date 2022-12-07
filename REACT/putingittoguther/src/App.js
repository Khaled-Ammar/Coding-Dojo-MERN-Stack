import logo from './logo.svg';
import './App.css';
import Mern from './component/Mern';
function App() {
  return (
    <div className="App">
      <Mern firstName={"Khaled"}  lastName={"Ammar"} age={24} hairColor={"black"} />
      <Mern firstName={"ahmad"}  lastName={"tome"} age={27} hairColor={"white"} />

      

    </div>
  );
}

export default App;
