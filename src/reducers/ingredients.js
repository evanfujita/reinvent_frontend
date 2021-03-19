const ingredients = (state = [], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.ingredients
        default:
            return state
    }
}

export default ingredients