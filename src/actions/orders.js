import { RENDER_ORDERS, SEND_ORDER } from '../helpers/constants'

export const renderOrders = dispatch => {
    fetch('http://localhost:3000/orders')
    .then(resp => resp.json())
    .then(orders => dispatch({ type: RENDER_ORDERS, payload: orders }))
}

export const sendOrder = (dispatch, reqObj) => {
    fetch('http://localhost:3000/sendOrder', reqObj)
    .then(resp => resp.json())
    .then(order => dispatch({type: SEND_ORDER, payload: order}))
    //reducer not built out yet
}