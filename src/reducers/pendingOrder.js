function pendingOrder(state=[], action) {
    let newState
    switch(action.type){
        case 'PENDING_ORDER':
        if(!state){
            return [...action.order]
        } else {       
            return [
                ...state,
                ...action.order
            ]
        }

        case 'ACCEPT_ORDER':
            
            newState = state.filter(ingredient => {
                return (ingredient.ingredient.id !== action.ingredient.id)
            })
            return newState

        case 'LOGOUT':
            return []
        
        default:
            return state
    }
}

export default pendingOrder