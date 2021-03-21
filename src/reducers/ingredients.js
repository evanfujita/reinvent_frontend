const ingredients = (state = [], action) => {
    switch(action.type){
        case 'RENDER_INGREDIENTS':
            return action.ingredients
        
        case 'ADD_INGREDIENT':
            return action.ingredient
        default:
            return state
    }
}

export default ingredients