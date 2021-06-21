import { RENDER_VENDORS } from '../helpers/constants'

export const loginVendors = dispatch => {
    fetch('http://localhost:3000/vendors')
    .then(resp => resp.json())
    .then(vendors => dispatch({ type: RENDER_VENDORS, payload: vendors })
    )    
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