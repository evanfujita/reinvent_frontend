import React from 'react';
import NavBar from './components/NavBar'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import IngredientsContainer from './components/IngredientsContainer'
import OrderList from './components/OrderList'
import ProfileEdit from './components/ProfileEdit'
import VendorsContainer from './components/VendorsContainer'
import PendingOrderContainer from './components/PendingOrderContainer'
import { connect } from 'react-redux'
import { currentUser } from './actions/index'
import { lowIngredient, renderIngredients } from './actions/ingredients'
import { renderVendors } from './actions/vendors'
import { renderOrders } from './actions/orders'
import { abundantIngredient } from './actions/ingredients'
import Carousel from './components/Carousel'


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
      this.props.history.push('/ingredients')
    })
    
    fetch('http://localhost:3000/ingredients')
    .then(resp => resp.json())
    .then(ingredients => {
      const sortedIngredients = ingredients.sort(function(a,b){
        if(a.name < b.name) {return -1}
        if(a.name > b.name) {return 1}
        return 0
    })
        this.props.renderIngredients(sortedIngredients)
        sortedIngredients.forEach(ingredient => {
          if(ingredient.quantity < ingredient.par) {
            this.props.lowIngredient(ingredient)
          } else if (ingredient.quantity > (ingredient.par * 4)){
            this.props.abundantIngredient(ingredient)
          }
        })  
      })

    fetch('http://localhost:3000/vendors')
    .then(resp => resp.json())
    .then(vendors => {
      this.props.renderVendors(vendors)
    })

    fetch('http://localhost:3000/orders')
    .then(resp => resp.json())
    .then(orders => {
      this.props.renderOrders(orders)
    })
}}

  render(){
  return (
    <div className="App">
      <img src='./ingredients-photo.jpeg' id='bg' alt='' />
      <header className="App-header">
          <NavBar />
      </header>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/ingredients' component={IngredientsContainer} />
          <Route path='/updateProfile' component={ProfileEdit} />
          <Route path='/orderList' component={OrderList} />
          <Route path='/vendors' component={VendorsContainer} />
          <Route path='/pendingOrder' component={PendingOrderContainer} />
          <Route exact path='/carousel' component={Carousel} />

        </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = {
  currentUser,
  renderIngredients,
  lowIngredient,
  renderVendors,
  renderOrders,
  abundantIngredient
}

export default withRouter(connect(null, mapDispatchToProps)(App));
