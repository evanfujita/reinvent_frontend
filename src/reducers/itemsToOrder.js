const itemsToOrder = (state=[], action) => {
    switch(action.type){
        case 'ITEM_TO_ORDER':
            debugger
            return [
                ...state,
                action.ingredient
            ]
        case 'DELETE_ITEM':
            // debugger
            const newState = state.filter(ingredient => ingredient.ingredient.id !== action.ingredient.id)
            return newState
        default:
            return state
    }
}

export default itemsToOrder