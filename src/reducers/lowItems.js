const lowIngredients = (state = [], action) => {
    
    switch(action.type){

        case 'LOW_INGREDIENT':
            // const lowIngredient = action.ingredient.quantity < action.ingredient.par ? [...state, action.ingredient] : state
            return [...state, action.ingredient]

        case 'LOGOUT':
            return []
            
        default:
            return state
    }
}

export default lowIngredients