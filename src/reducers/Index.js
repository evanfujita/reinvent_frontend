import { combineReducers } from 'redux'
import userReducer from './users'
import authReducer from './auth'
import ingredientsReducer from './ingredients'
import lowIngredientsReducer from './lowIngredients'
import categoriesReducer from './categories'
import selectionsReducer from './selections'
import vendorsReducer from './vendors'
import ordersReducer from './orders'
import pendingOrderReducer from './pendingOrder'


export default combineReducers({
  categories: categoriesReducer,
  user: userReducer,
  auth: authReducer,
  ingredients: ingredientsReducer,
  lowIngredients: lowIngredientsReducer,
  selections: selectionsReducer,
  vendors: vendorsReducer,
  orders: ordersReducer,
  pendingOrder: pendingOrderReducer
})

