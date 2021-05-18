import React from 'react'
import { logout } from '../../actions/user'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom' 
import { Menu, Label } from 'semantic-ui-react'
import NavBarLoggedIn from './NavBarLoggedIn'

const NavBar = props => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
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

    return(
            <Menu>

            { !user ? 
            <>
                <Menu.Item name='login' onClick={handleClick}  active={page === '/login'} id='login' />
                <Menu.Item name='signup' onClick={handleClick}  active={page === '/signup'} id='signup' />
            </>
            :
                <NavBarLoggedIn 
                handleClick={handleClick}
                handleLogout={handleLogout}
                page={page}
                label={label}
                // pendingOrders={pendingOrders}
                />
            }
            </Menu>
        
    )}

export default withRouter(NavBar)