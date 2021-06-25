const lowIngredients = (state = [], action) => {
    
    switch(action.type){
        case 'RENDER_INGREDIENTS':       
            return action.payload.low_ingredients
                    
        case 'LOW_INGREDIENT':
            return [...state, action.ingredient]
        case 'UPDATE_INGREDIENT_QUANTITY':
            if(action.payload.low){
                return [...state, action.payload]
            } else {
                return state
            }

        case 'REMOVE_LOW_INGREDIENT':
            return state.filter(ingredient => ingredient.id !== action.ingredient.id)

        case 'LOGOUT':
            return []
            
        default:
            return state
    }
}

export default lowIngredients