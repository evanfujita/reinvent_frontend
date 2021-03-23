import { combineReducers } from 'redux'
import userReducer from './users'
import authReducer from './auth'
import ingredientsReducer from './ingredients'
import categoryReducer from './category'
import quantityReducer from './ingredientQuantity'
import lowIngredientsReducer from './lowItems'
import categoriesReducer from './categories'


export default combineReducers({
  categories: categoriesReducer,
  user: userReducer,
  auth: authReducer,
  ingredients: ingredientsReducer,
  category: categoryReducer,
  ingredientQuantity: quantityReducer,
  lowIngredients: lowIngredientsReducer
  
})

