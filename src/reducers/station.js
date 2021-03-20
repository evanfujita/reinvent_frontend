const station = (state = 0, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return state
        case 'SET_STATION':
            return action.station
        case 'LOGOUT':
            return []
        default:
            return state
    }
}

export default station