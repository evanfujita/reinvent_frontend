function updatedInventory (state=[], action) {
    
    let newState
    switch(action.type){
        case 'UPDATED_INGREDIENT_INVENTORY':
            let updatedIngredient = state.find(ingredient => ingredient.id === action.ingredient.id)
            
            if(updatedIngredient){
                if(updatedIngredient.quantity !== action.ingredient.quantity){
                    updatedIngredient.quantity = action.ingredient.quantity
                } else {return state}
            } else {
                return [...state, action.ingredient]
            }
                    
        case 'UNDO_UPDATED_INGREDIENT_INVENTORY':
            newState = state.filter(i => i.id !== action.id)
            return newState
        
        case 'UPDATE_INGREDIENT_QUANTITY':
        case 'LOGOUT':
            return []
        
        default:
            return state
    }
}

export default updatedInventory