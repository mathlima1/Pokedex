import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Pages/Home'
import Pokemons from './Pages/Pokemons'
import Error404 from './Pages/Error404'

import './styles/global.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pokemons">
            <Header />
            <Pokemons />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
