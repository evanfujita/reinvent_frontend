import React from 'react';
import NavBar from './components/NavBar'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import IngredientsContainer from './components/IngredientsContainer'
import Dashboard from './components/Dashboard'
import OrderList from './components/OrderList'
import { connect } from 'react-redux'
import { currentUser } from './actions/index'
import { lowIngredient, renderIngredients } from './actions/ingredients'


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
    
    fetch('http://localhost:3000/ingredients')
    .then(resp => resp.json())
    .then(ingredients => {
        this.props.renderIngredients(ingredients)
        ingredients.forEach(ingredient => 
          ingredient.quantity < ingredient.par ? this.props.lowIngredient(ingredient) : null
        )
    })

}}



  render(){
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
      </header>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/ingredients' component={IngredientsContainer} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/orderList' component={OrderList} />
        </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = {
  currentUser,
  renderIngredients,
  lowIngredient
}

export default withRouter(connect(null, mapDispatchToProps)(App));
