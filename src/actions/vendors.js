export const renderVendors = vendors => {
    return {
        type: 'RENDER_VENDORS',
        vendors
    }
}

export const addVendor = vendor => {
    return {
        type: 'ADD_VENDOR',
        vendor
    }
}