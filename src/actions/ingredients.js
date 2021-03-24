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

export const updateIngredientQuantity = (ingredient) => {
    return {
        type: 'UPDATE_INGREDIENT_QUANTITY',
        ingredient: ingredient
    }
}

export const addIngredient = ingredient => {
    return {
        type: 'ADD_INGREDIENT',
        ingredient: ingredient
    }
}

export const deleteIngredient = ingredient => {
    return {
        type: 'DELETE_INGREDIENT',
        ingredient: ingredient
    }
}

export const lowIngredient = ingredient => {
    return {
        type: 'LOW_INGREDIENT',
        ingredient: ingredient
    }
}
