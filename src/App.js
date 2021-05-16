import React from 'react';
import NavBar from './components/FunctionalComponents/NavBar'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Home from './components/FunctionalComponents/Home'
import Login from './components/User/Login'
import Signup from './components/User/Signup'
import IngredientsContainer from './components/Ingredients/IngredientsContainer'
import OrderList from './components/Orders/OrderList'
import ProfileEdit from './components/User/ProfileEdit'
import VendorsContainer from './components/Vendors/VendorsContainer'
import PendingOrderContainer from './components/Orders/PendingOrderContainer'
import { connect } from 'react-redux'
import { currentUser } from './actions/index'
import { lowIngredient, renderIngredients } from './actions/ingredients'
import { renderVendors } from './actions/vendors'
import { renderOrders } from './actions/orders'
import { fetchIngredients, fetchUser, fetchVendors } from './helpers/fetch'

class App extends React.Component {
  componentDidMount(){
    const token = localStorage.getItem('token')
    
    if(!token){
      this.props.history.push('/home')
    } else {
    
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    fetchUser(this.props.currentUser, reqObj)
    fetchIngredients(this.props.renderIngredients, this.props.lowIngredient)
    fetchVendors(this.props.renderVendors)
    this.props.history.push('/ingredients')
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
}

export default withRouter(connect(null, mapDispatchToProps)(App));
