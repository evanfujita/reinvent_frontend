export const selectIngredient = ingredient => {
    return {
        type: 'SELECT_INGREDIENT',
        ingredient: ingredient
    }
}