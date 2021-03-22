const lowIngredients = (state = [], action) => {
    
    switch(action.type){
        case 'LOW_INGREDIENT':
            return [...state, action.ingredient]
        case 'UPDATE_INGREDIENT':
            const lowIngredient = action.ingredient.quantity < action.ingredient.par ? [...state, action.ingredient] : state
            return lowIngredient

        case 'LOGOUT':
            return []
            
        default:
            return state
    }
}

export default lowIngredients