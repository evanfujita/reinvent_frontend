const categories = (state = [], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.categories
        default:
            return state
    }
}

export default categories