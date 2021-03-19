const category = (state = 1, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return 1
        case 'SELECT_CATEGORY':
            return action.category
        case 'LOGOUT':
            return []
        default:
            return state
    }
}

export default category