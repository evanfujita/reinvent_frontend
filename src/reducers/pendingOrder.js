function pendingOrder(state=[], action) {
    switch(action.type){
        case 'PENDING_ORDER':
            return action.order
        default:
            return state
    }
}

export default pendingOrder