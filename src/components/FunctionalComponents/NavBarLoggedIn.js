import React from 'react'
import { Menu, Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import IngredientsDropdown from '../Ingredients/IngredientsDropdown'
import ProfileDropdown from '../User/ProfileDropdown'
import PendingOrders from './PendingOrders'

const NavBarLoggedIn = props => {
    const { handleClick, handleLogout, page } = props
    const lowIngredients = useSelector(state => state.lowIngredients)
    const label = lowIngredients.length === 0 ? null : <Label floating circular color='red' >{lowIngredients.length}</Label>

    return(
        <>
        <Menu.Item name='ingredients' onClick={handleClick}  active={page === '/ingredients'} id='ingredients' />
        <Menu.Item name='vendors' onClick={handleClick}  active={page === '/vendors'} id='vendors' />
        <Menu.Item name='orderList' onClick={handleClick} active={page === '/orderList'} id='orderList'>
            OrderList 
            { label }
        </Menu.Item>
            <PendingOrders onClick={handleClick} active={page === '/pendingOrder'} />
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