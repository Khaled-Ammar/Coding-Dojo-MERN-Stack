import Create from './views/Create';
import { Router } from '@reach/router';
import Update from './views/Update';
import Main from './views/Main';
import Details from './views/Details';

function App() {
  return (
    <div  className="App">
          <Router >
            <Main path="/"/>
            <Create path="/new"/>
            <Details path="/show/:id" />
            <Update path="/edit/:id"/>
          </Router>
        </div>
  );
}

export default App;