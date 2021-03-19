import React from 'react';
import NavBar from './components/NavBar'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Stations from './components/Stations'
import Login from './components/Login'
// import LoginForm from './components/LoginForm'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import { connect } from 'react-redux'
import { currentUser } from './actions/index'

class App extends React.Component {
  componentDidMount(){
    const token = localStorage.getItem('token')

    // debugger
    
    
    if(!localStorage.getItem('token')){
             //token not recognized here?
      this.props.history.push('/home')
    } else {
    
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    fetch('http://localhost:3000/current_user', reqObj)
    .then(resp => resp.json())
    .then(user => {
    
      this.props.currentUser(user)
      this.props.history.push('/dashboard')
    })
  }
}
  render(){
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
      </header>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/stations' component={Stations} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = {
  currentUser: currentUser
}

export default withRouter(connect(null, mapDispatchToProps)(App));
