import { LOGIN_SUCCESS } from '../helpers/constants'

export const renderCategories = dispatch => {
    fetch('http://localhost:3000/categories')
    .then(resp => resp.json())
    .then(categories => dispatch({type: LOGIN_SUCCESS, payload: categories}))
}