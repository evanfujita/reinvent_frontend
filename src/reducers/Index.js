import { combineReducers } from 'redux'
import userReducer from './users'
import authReducer from './auth'
import stationsReducer from './stations'
import categoriesReducer from './categories'
import ingredientsReducer from './ingredients'

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  stations: stationsReducer,
  categories: categoriesReducer,
  ingredients: ingredientsReducer
})

