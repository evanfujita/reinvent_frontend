const ingredients = (state = [], action) => {
    let updatedIngredients
    switch(action.type){
        case 'RENDER_INGREDIENTS':
            return action.payload
            
            
        case 'UPDATE_INGREDIENT_QUANTITY':
        case 'UPDATE_INGREDIENT':
            // debugger
            updatedIngredients = state.map(ingredient => {
                if(ingredient.id === action.payload.id){
                    return action.payload
                } else {
                    return ingredient
                }
            })
            return updatedIngredients
    
        case 'ADD_INGREDIENT':
            debugger
            return [...state, action.ingredient]
            
        case 'DELETE_INGREDIENT':
            updatedIngredients = state.filter(ingredient => ingredient.id !== action.ingredient)
            return updatedIngredients
        
        case 'LOGOUT':
            return []
            
        default:
            return state
    }
}

export default ingredients