function parMeter(state=1, action){
    switch(action.type){
        case 'PAR_METER':
            return action.par
        default:
            return state
    }
}

export default parMeter