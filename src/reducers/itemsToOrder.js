const itemsToOrder = (state=[], action) => {
    let newState
    switch(action.type){
        case 'ITEM_TO_ORDER':
            let item = state.find(ingredient => (ingredient.ingredient.id === action.ingredient.ingredient.id))
            if(item){
                newState = state.filter(ingredient => ingredient.ingredient.id !== action.ingredient.ingredient.id)
                return newState
            } else {
                return [
                    ...state,
                    action.ingredient
                ]
            }
        case 'DELETE_ITEM':
            // debugger
            newState = state.filter(ingredient => ingredient.ingredient.id !== action.ingredient.id)
            return newState
        default:
            return state
    }
}

export default itemsToOrder