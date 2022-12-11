import logo from './logo.svg';
import './App.css';
import Boxmsg from './components/Boxmsg';
function App() {
  return (
    <div className="App">
    <Boxmsg  arr= {[{label : "tab1" , content : "tab 1 content"} , {label : "tab2" , content : "tab 2 content" }, {label : "tab3" , content : "tab 3 content"}]}/>
    </div>
  );
}

export default App;
