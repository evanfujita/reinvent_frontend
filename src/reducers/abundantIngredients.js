const abundantIngredient = (state=[], action) => {
    switch(action.type){
        case 'ABUNDANT_INGREDIENT':
            debugger
            return [...state, action.ingredient]

        case 'UPDATE_INGREDIENT_QUANTITY':
            debugger
            let newState = state
            if(action.ingredient.quantity > (action.ingredient.par * 4)){
                newState = [
                    ...state, action.ingredient
                ]
            }
            return newState

        default:
            return state
    }
}

export default abundantIngredient