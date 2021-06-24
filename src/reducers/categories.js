const categories = (state = [], action) => {
    switch(action.type){

        case 'RENDER_VENDORS':
            return action.payload
        case 'LOGOUT':
            return []
        default:
            return state
    }
}

export default categories