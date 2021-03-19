const ingredients = (state = [], action) => {
    switch(action.type){
        case 'ADD_INGREDIENT':
            console.log('ingredients success', action.ingredient)
            return action.ingredient
        default:
            return state
    }
}

export default ingredients