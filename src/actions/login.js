export const loginSuccess = user => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        user: {}
    }
}