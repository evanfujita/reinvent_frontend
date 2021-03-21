import { combineReducers } from 'redux'
import userReducer from './users'
import authReducer from './auth'
import stationsReducer from './stations'
import stationReducer from './station'
import categoriesReducer from './categories'
import ingredientsReducer from './ingredients'
import categoryReducer from './category'
import dishesReducer from './dishes'
import navbarReducer from './navbar'


export default combineReducers({
  user: userReducer,
  auth: authReducer,
  stations: stationsReducer,
  station: stationReducer,
  categories: categoriesReducer,
  ingredients: ingredientsReducer,
  category: categoryReducer,
  dishes: dishesReducer,
  
  // navbar: navbarReducer
})

