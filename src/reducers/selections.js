function selections(state={}, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return {category: 0}
        case 'SELECT_INGREDIENT':
            return {...state, ingredient: action.ingredient}
        case 'SELECT_CATEGORY':
            return {...state, category: action.category}
        case 'SELECT_VENDOR':
            return {...state, vendor: action.vendor}

        case 'LOGOUT':
            return null

        default:
            return state
    }
}

export default selections