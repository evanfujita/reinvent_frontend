
export const currentUser = user => {
    return {
        type: 'CURRENT_USER',
        user
    }
}

export const selectCategory = category => {
    return {
        type: 'SELECT_CATEGORY',
        category: category
    }
}
