import React from 'react'
import { Menu, Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const PendingOrders = props => {
    const { onClick, page } = props

    const pendingOrder = useSelector(state => state.pendingOrder)

    return(
        <Menu.Item 
        name='pendingOrder' 
        onClick={onClick}
        active={page === '/pendingOrder'} 
        id='pendingOrder'>
            Pending Orders
            <Label floating circular color='yellow'>{pendingOrder.length}</Label>
        </Menu.Item>
    )
}

export default PendingOrders