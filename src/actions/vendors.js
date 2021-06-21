import { LOGIN_SUCCESS } from '../helpers/constants'

export const loginVendors = vendors => {
    return {
        type: LOGIN_SUCCESS,
        vendors
    }
}

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

export const deleteVendor = id => {
    return {
        type: 'DELETE_VENDOR',
        id
    }
}