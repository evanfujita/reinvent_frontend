function updatedInventory (state=[], action) {
    
    switch(action.type){
        case 'UPDATED_INGREDIENT_INVENTORY':
            return [...state, action.ingredient]
        
        case 'UNDO_UPDATED_INGREDIENT_INVENTORY':
            state.pop()
            return state

        case 'LOGOUT':
            return []
        
        default:
            return state
    }
}

export default updatedInventory