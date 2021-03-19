function user(state=null, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            console.log('user login success', action.user)
            return {
                first_name: action.user.first_name,
                last_name: action.user.last_name,
                username: action.user.username,
                restaurant: action.user.restaurant_name
            }

        case 'LOGOUT':
            return {}

        default:
            return state
    }
}

export default user