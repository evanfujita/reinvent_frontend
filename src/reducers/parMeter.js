function parMeter(state=1, action){
    switch(action.type){
        case 'PAR_METER':
            return action.par
            default:
                return state
        
        case 'LOGOUT':
            return null
        }
}

export default parMeter