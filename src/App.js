import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Stations from './components/Stations'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/stations' component={Stations} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
