
export const loginSuccess = user => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    }
}

export const currentUser = user => {
    return {
        type: 'CURRENT_USER',
        user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        user: {}
    }
}