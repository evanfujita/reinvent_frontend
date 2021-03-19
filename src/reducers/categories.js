const categories = (state = [], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.categories
        case 'LOGOUT':
            return []
        default:
            return state
    }
}

export default categories