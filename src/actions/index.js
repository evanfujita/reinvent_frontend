
export const currentUser = user => {
    return {
        type: 'CURRENT_USER',
        user
    }
}

export const setPage = page => {
    return {
        type: 'SET_PAGE',
        page
    }
}
