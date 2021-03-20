export const renderIngredients = ingredients => {
    return {
        type: 'RENDER_INGREDIENTS',
        ingredients: ingredients
    }
}

export const addIngredient = ingredient => {
    return {
        type: 'ADD_INGREDIENT',
        ingredient: ingredient
    }
}