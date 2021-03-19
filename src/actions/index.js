
export const loginSuccess = user => {
    return {
        type: 'LOGIN_SUCCESS',
        user
    }
}

export const currentUser = user => {
    return {
        type: 'CURRENT_USER',
        user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        user: {}
    }
}

export const addDish = dish => {
    return {
        type: 'ADD_DISH',
        dish
    }
}

export const addStation = station => {
    return {
        type: 'ADD_STATION',
        station
    }
}

export const addIngredient = ingredient => {
    return {
        type: 'ADD_INGREDIENT',
        ingredient: ingredient
    }
}

export const selectCategory = category => {
    return {
        type: 'SELECT_CATEGORY',
        category: category
    }
}