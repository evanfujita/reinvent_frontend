const active=(state = {}, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return {}

        case 'LOGOUT':
            return {}
        default:
            return state
    }
}

export default active