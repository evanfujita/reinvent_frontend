import { LOGIN_SUCCESS } from '../helpers/constants'
import { loginVendors } from '../actions/vendors'
import { loginIngredients } from './ingredients'
// import { renderOrders } from './orders'
import { renderCategories } from './categories'

export const loginSuccess = (dispatch, reqObj) => {
    fetch('http://localhost_3000/current_user', reqObj)
    .then(resp => resp.json())
    .then(user => dispatch({type: LOGIN_SUCCESS, payload: user})
    )
}

export const loginAuth = (dispatch, reqObj) => {
    fetch('http://localhost:3000/auth', reqObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                //error handling
            } else {
                dispatch({type: LOGIN_SUCCESS, payload: user.user})
                loginVendors(dispatch)
                loginIngredients(dispatch)
                renderCategories(dispatch)        
                // renderOrders(dispatch)      need to develop orders
                localStorage.setItem('token', user.token)
            }
        })
}

export const updateUser = user => {
    return {
        type: 'UPDATE_USER',
        user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        user: null
    }
}