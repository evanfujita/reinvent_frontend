import { RENDER_VENDORS } from '../helpers/constants'

export const renderCategories = dispatch => {
    fetch('http://localhost:3000/categories')
    .then(resp => resp.json())
    .then(categories => dispatch({type: RENDER_VENDORS, payload: categories}))
}