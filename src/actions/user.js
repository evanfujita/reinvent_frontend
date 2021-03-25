export const loginSuccess = user => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    }
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