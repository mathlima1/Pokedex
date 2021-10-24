import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Pages/Home'
import Pokemons from './Pages/Pokemons'

import './styles/global.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
