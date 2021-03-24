export const selectIngredient = ingredient => {
    return {
        type: 'SELECT_INGREDIENT',
        ingredient: ingredient
    }
}

export const selectCategory = category => {
    return {
        type: 'SELECT_CATEGORY',
        category: category
    }
}
