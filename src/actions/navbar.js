export const loginSuccess = () => {
    return {
        type: 'LOGIN_SUCCESS',
        navbar: ['stations']
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        navbar: ['login', 'signup']
    }
}