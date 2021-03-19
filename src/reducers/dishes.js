const dishes = (state = [], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return action.user.dishes
        case 'LOGOUT':
            return []
        default:
            return state
    }
}

export default dishes