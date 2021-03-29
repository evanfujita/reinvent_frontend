export const pendingOrder = order => {
    return {
        type: 'PENDING_ORDER',
        order
    }
}