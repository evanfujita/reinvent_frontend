import { RENDER_ORDERS } from '../helpers/constants'

export const renderOrders = dispatch => {
    fetch('http://localhost:3000/orders')
    .then(resp => resp.json())
    .then(orders => dispatch({ type: RENDER_ORDERS, payload: orders }))
}