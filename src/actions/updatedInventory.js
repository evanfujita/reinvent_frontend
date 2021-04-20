export const updatedInventory = ingredient => {
    return {
        type: 'UPDATED_INGREDIENT_INVENTORY',
        ingredient
    }
}