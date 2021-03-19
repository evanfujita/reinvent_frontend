const stations = (state = [], action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
        case 'CURRENT_USER':
            return action.user.stations
        case 'LOGOUT':
            return []
        case 'ADD_STATION':
            return action.station
        default:
            return state
    }
}

export default stations