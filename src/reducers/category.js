const category = (state = 0, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return null
        case 'SELECT_CATEGORY':
            return action.category
        case 'LOGOUT':
            return []
        default:
            return state
    }
}

export default category