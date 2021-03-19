const stations = (state = [], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.stations
        case 'LOGOUT':
            return []
        default:
            return state
    }
}

export default stations