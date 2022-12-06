import logo from './logo.svg';
import './App.css';
import Hedar from './component/Hedar';
function App() {
  return (
    <div className="App">
      <Hedar firstName={"Khaled"}  lastName={"Ammar"} age={24} hairColor={"black"} />
      <Hedar firstName={"ahmad"}  lastName={"jaser"} age={27} hairColor={"white"} />

      

    </div>
  );
}

export default App;
