import './App.css';
import ProductManager from './comp/ProductManager';

import ProductsShow from './comp/ProductsShow';
import Detail from './views/Detail';
import { Router } from '@reach/router';
import Update from './views/Update';
import Main from './views/Main';

function App() {
  return (
    <div  className="App">
          <Router >
            <Main path="/"/>
        
            <Detail path="/product/:id"/>
            <Update path="/product/:id/edit"/>
          </Router>
        </div>
  );
}

export default App;