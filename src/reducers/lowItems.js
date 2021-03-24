const lowIngredients = (state = [], action) => {
    
    switch(action.type){
        case 'LOW_INGREDIENT':
            return [...state, action.ingredient]
        case 'UPDATE_INGREDIENT':
            // debugger
            let lowIngredients 
            if(action.ingredient.quantity < action.ingredient.par){
                lowIngredients = [...state, action.ingredient]
            } else if (!!state.find(ingredient => ingredient.id === action.ingredient.id)){
                lowIngredients = state.map(ingredient => ingredient === action.ingredient ? action.ingredient : ingredient)
            } else if (action.ingredient.quantity > action.ingredient.par){
                if (!!state.find(ingredient => ingredient.id === action.ingredient.id)){
                    lowIngredients = state.filter(ingredient => ingredient.id !== action.ingredient.id)
                }
            }  
        return lowIngredients

        case 'LOGOUT':
            return []
            
        default:
            return state
    }
}

export default lowIngredients