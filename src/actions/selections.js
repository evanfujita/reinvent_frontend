export const selectIngredient = ingredient => {
    return {
        type: 'SELECT_INGREDIENT',
        ingredient
    }
}

export const deleteSelectedIngredient = () => {
    return {
        type: 'DELETE_INGREDIENT'
    }
}

export const selectCategory = category => {
    return {
        type: 'SELECT_CATEGORY',
        category
    }
}

export const selectVendor = vendor => {
    return {
        type: 'SELECT_VENDOR',
        vendor
    }
}
