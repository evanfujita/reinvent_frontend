export const updatedInventory = ingredient => {
    return {
        type: 'UPDATED_INGREDIENT_INVENTORY',
        ingredient
    }
}

export const undoUpdatedInventory = () => {
    return {
        type: 'UNDO_UPDATED_INGREDIENT_INVENTORY'
    }
}