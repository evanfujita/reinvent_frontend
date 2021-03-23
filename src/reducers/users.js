function user(state=null, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return action.user

        case 'LOGOUT':
            return null

        default:
            return state
    }
}

export default user