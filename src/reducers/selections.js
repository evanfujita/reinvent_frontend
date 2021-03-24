function selections(state=[], action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return []
        case 'SELECT_INGREDIENT':
            return {ingredient: action.ingredient}

        case 'LOGOUT':
            return null

        default:
            return state
    }
}

export default selections