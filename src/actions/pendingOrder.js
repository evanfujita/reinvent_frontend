export const pendingOrder = (order) => {
    return {
        type: 'PENDING_ORDER',
        order
    }
}

export const itemsToOrder = (ingredient) => {
    return {
        type: 'ITEM_TO_ORDER',
        ingredient
    }
}

export const deleteItem = ingredient => {
    return {
        type: 'DELETE_ITEM',
        ingredient
    }
}

export const acceptOrder = ingredient => {
    return {
        type: 'ACCEPT_ORDER',
        ingredient
    }
}

export const itemsToAccept = ingredient => {
    return {
        type: 'ITEM_TO_ACCEPT',
        ingredient
    }
}

export const itemsToDeny = ingredient => {
    return {
        type: 'ITEM_TO_DENY',
        ingredient
    }
}