const categories = (state = [], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.payload.user.categories
        case 'CURRENT_USER':
            return action.payload.user.categories
        case 'LOGOUT':
            return []
        default:
            return state
    }
}

export default categories