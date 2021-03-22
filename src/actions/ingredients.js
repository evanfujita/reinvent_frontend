export const renderIngredients = ingredients => {
    return {
        type: 'RENDER_INGREDIENTS',
        ingredients: ingredients
    }
}

export const updateIngredient = ingredient => {
    return {
        type: 'UPDATE_INGREDIENT',
        ingredient: ingredient
    }
}

export const changeIngredientQuantity = (ingredientQuantity) => {
    return {
        type: 'UPDATE_INGREDIENT_QUANTITY',
        ingredientQuantity: ingredientQuantity
    }
}

export const addIngredient = ingredient => {
    return {
        type: 'ADD_INGREDIENT',
        ingredient: ingredient
    }
}

export const lowIngredient = ingredient => {
    return {
        type: 'LOW_INGREDIENT',
        ingredient: ingredient
    }
}