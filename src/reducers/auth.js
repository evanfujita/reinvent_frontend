const auth=(state = {}, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return {id: action.user.id}

        case 'LOGOUT':
            return {}
        default:
            return state
    }
}

export default auth