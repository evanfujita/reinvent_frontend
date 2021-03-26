function vendor(state=[], action){
    switch(action.type){

        case 'RENDER_VENDORS':
            return action.vendors

        default:
            return state
    }
}

export default vendor