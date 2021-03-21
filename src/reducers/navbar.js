const navbar = (state = ['login', 'signup'], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.navbar
        default:
            return state
    }
}

export default navbar