function selections(state={category: 'all', vendor: 'all'}, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return state

        case 'SELECT_INGREDIENT':
            return {...state, ingredient: action.ingredient}

        case 'SELECT_CATEGORY':
            return {...state, category: action.category}
            
        case 'SELECT_VENDOR':
            return {...state, vendor: action.vendor}

        case 'DELETE_INGREDIENT':
            return {
                ...state,
                ingredient: null
            }

        case 'LOGOUT':
            return {}

        default:
            return state
    }
}

export default selections