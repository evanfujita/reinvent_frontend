function vendor(state=[], action){
    switch(action.type){

        case 'RENDER_VENDORS':
            return action.vendors
        case 'ADD_VENDOR':
            return [...state, action.vendor]

        default:
            return state
    }
}

export default vendor