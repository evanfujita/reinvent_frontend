import { LOGIN_SUCCESS } from '../helpers/constants'

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
                // this.setState({
                //     error: user.error
                // })
            } else {
                dispatch({type: LOGIN_SUCCESS, payload: user})
                // props.loginSuccess(user.user)
                // props.history.push('/ingredients')

                // fetchIngredients(props.renderIngredients, props.lowIngredient)
                // fetchVendors(props.renderVendors)
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