function vendor(state=[], action){
    switch(action.type){

        case 'RENDER_VENDORS':
            return action.vendors
        case 'ADD_VENDOR':
            return [...state, action.vendor]
        case 'DELETE_VENDOR':
            let updatedVendors = state.filter(vendor => vendor.id !== action.id)
            return updatedVendors
        case 'LOGOUT':
            return []
        default:
            return state
    }
}

export default vendor