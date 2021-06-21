import { LOGIN_SUCCESS } from '../helpers/constants'

export const loginVendors = () => {
    fetch('http://localhost:3000/vendors')
    .then(resp => resp.json())
    .then(vendors => dispatch({ type: LOGIN_SUCCESS, payload: vendors })
    )    
}

// export const renderVendors = vendors => {
//     return {
//         type: 'RENDER_VENDORS',
//         vendors
//     }
// }

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