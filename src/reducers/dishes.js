const dishes = (state = [], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
        
        case 'LOGOUT':
            return []
        case 'RENDER_DISHES':
            return action.dishes
        default:
            return state
    }
}

export default dishes