const itemsToAccept = (state=[], action) => {
    let newState
    switch(action.type){
        case 'ITEM_TO_ACCEPT':
            return [
                ...state,
                action.ingredient
            ]

        case 'ITEM_TO_DENY':
            newState = state.filter(ingredient => ingredient.ingredient.id !== action.ingredient.id)
            return newState

        case 'DELETE_ITEM':
            
            newState = state.filter(ingredient => ingredient.ingredient.id !== action.ingredient.id)
            return newState
        default:
            return state
    }
}

export default itemsToAccept