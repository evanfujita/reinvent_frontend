import React from 'react';
import NavBar from './components/NavBar'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import StationsViewer from './components/StationsViewer'
import Login from './components/Login'
import Dishes from './components/Dishes'
import CreateDish from './components/CreateDish'
import Signup from './components/Signup'
import IngredientsContainer from './components/IngredientsContainer'
import AddIngredient from './components/AddIngredient'
import Dashboard from './components/Dashboard'
import { connect } from 'react-redux'
import { currentUser } from './actions/index'

class App extends React.Component {
  componentDidMount(){
    const token = localStorage.getItem('token')
    
    if(!localStorage.getItem('token')){
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
          <Route path='/stations' component={StationsViewer} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/ingredients' component={IngredientsContainer} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/dishes' component={Dishes} />  
          <Route path='/newDish' component={CreateDish} />
          <Route exact path='/addIngredient' component={AddIngredient} />
        </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = {
  currentUser: currentUser
}

export default withRouter(connect(null, mapDispatchToProps)(App));
