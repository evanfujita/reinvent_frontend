import React from 'react'
import { Menu, Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import IngredientsDropdown from '../Ingredients/IngredientsDropdown'
import ProfileDropdown from '../User/ProfileDropdown'

const NavBarLoggedIn = props => {
    const { handleClick, handleLogout, page, label } = props
    const pendingOrder = useSelector(state => state.pendingOrder)
    const pendingOrders = pendingOrder.length === 0
    ? 
    null
    :
    <Menu.Item 
    name='pendingOrder' 
    onClick={handleClick} 
    active={page === '/pendingOrder'} 
    id='pendingOrder'>
        Pending Orders
        <Label floating circular color='yellow'>{pendingOrder.length}</Label>
    </Menu.Item>

    return(
        <>
        <Menu.Item name='ingredients' onClick={handleClick}  active={page === '/ingredients'} id='ingredients' />
        <Menu.Item name='vendors' onClick={handleClick}  active={page === '/vendors'} id='vendors' />
        <Menu.Item name='orderList' onClick={handleClick} active={page === '/orderList'} id='orderList'>
            OrderList 
            { label }
        </Menu.Item>
            {pendingOrders}
        <Menu.Item name='ingredients' >
        <IngredientsDropdown handleClick={handleClick} />
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
                <ProfileDropdown />
            </Menu.Item>
            <Menu.Item name='logout' onClick={handleLogout}  active={page === '/logout'} id='logout' />
        </Menu.Menu>
    </> 
    )
}

export default NavBarLoggedIn