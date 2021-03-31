export const selectIngredient = ingredient => {
    return {
        type: 'SELECT_INGREDIENT',
        ingredient
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
