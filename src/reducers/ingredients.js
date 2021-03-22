const ingredients = (state = [], action) => {
    switch(action.type){
        case 'RENDER_INGREDIENTS':
            return action.ingredients
        case 'UPDATE_INGREDIENT':
            const newState = state.ingredients.map(ingredient => {
                if(ingredient.id === action.ingredient.id){
                    return action.ingredient
                }})
            
            return {
                ...state,
                ingredients: newState
            }
            
       case 'ADD_INGREDIENT':
            return action.ingredient

        case 'LOGOUT':
            return []
            
        default:
            return state
    }
}

export default ingredients