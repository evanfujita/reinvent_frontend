const ingredients = (state = [], action) => {
    switch(action.type){
        case 'RENDER_INGREDIENTS':
            return action.ingredients
        case 'UPDATE_INGREDIENT':
            console.log(state)
            const newState = state.map(ingredient => {
                if(ingredient.id === action.ingredient.id){
                    return action.ingredient
                } else {
                    return ingredient
                }})
            
            return newState
                
            
            
       case 'ADD_INGREDIENT':
            return [...state, action.ingredient]
            

        case 'LOGOUT':
            return []
            
        default:
            return state
    }
}

export default ingredients