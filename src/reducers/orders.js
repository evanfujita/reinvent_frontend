function orders(state=[], action){
    switch(action.type){
        case 'RENDER_ORDERS':
            return action.payload
        case 'CURRENT_USER':
            return state
        default:
            return state
    }
}

export default orders