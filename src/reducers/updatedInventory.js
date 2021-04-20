function updatedInventory (state=[], action) {
    
    switch(action.type){
        case 'UPDATED_INGREDIENT_INVENTORY':
            
            return [...state, action.ingredient]

        case 'LOGOUT':
            return []
        
        default:
            return state
    }
}

export default updatedInventory