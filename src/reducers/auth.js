const auth=(state = {}, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return {id: action.payload.id}
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}

export default auth