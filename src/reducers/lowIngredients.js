const lowIngredients = (state = [], action) => {
    
    switch(action.type){
        case 'LOW_INGREDIENT':
            return [...state, action.ingredient]
        case 'UPDATE_INGREDIENT_QUANTITY':
            let lowIngredients 
            

            if (action.ingredient.quantity > action.ingredient.par){
                lowIngredients = state.filter(ingredient => ingredient.id !== action.ingredient.id)
            } else if(state.find(ingredient => ingredient.id === action.ingredient.id)){
                lowIngredients = state.map(ingredient => {
                    if(ingredient.id === action.ingredient.id){
                        return action.ingredient
                    } else {
                        return ingredient
                    }
                })         
            } else  if (action.ingredient.quantity < action.ingredient.par){
                lowIngredients = [...state, action.ingredient]
            } 
        return lowIngredients

        case 'LOGOUT':
            return []
            
        default:
            return state
    }
}

export default lowIngredients