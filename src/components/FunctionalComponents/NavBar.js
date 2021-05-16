import React from 'react'
import { logout } from '../../actions/user'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom' 
import { Menu, Label } from 'semantic-ui-react'
import ProfileDropdown from '../User/ProfileDropdown'
import IngredientsDropdown from '../Ingredients/IngredientsDropdown'


const NavBar = props => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const ingredients = useSelector(state => state.ingredients)
    const lowIngredients = useSelector(state => state.lowIngredients)
    const pendingOrder = useSelector(state => state.pendingOrder)
    const { history } = props
 
    const handleClick = (event) => {
        history.push(`/${event.target.id}`)
    }

    const handleLogout = () => {
        history.push('/home')
        dispatch(logout())
        localStorage.clear()
    }

    const page = history.location.pathname
    const label = lowIngredients.length === 0 ? null : <Label floating circular color='red' >{lowIngredients.length}</Label>
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
            <Menu>
            { !user ? 
            <>
                <Menu.Item name='login' onClick={handleClick}  active={page === '/login'} id='login' />
                <Menu.Item name='signup' onClick={handleClick}  active={page === '/signup'} id='signup' />
            </>
            :
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
            }
            </Menu>
        
    )}

export default withRouter(NavBar)