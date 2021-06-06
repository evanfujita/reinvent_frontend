import React from 'react'
import { logout } from '../../actions/user'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom' 
import { Menu } from 'semantic-ui-react'
import NavBarLoggedIn from './NavBarLoggedIn'

const NavBar = props => {
    //redux
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    
    //history
    const { history } = props
    const page = history.location.pathname
    
    //methods
    const handleClick = (event) => {
        history.push(`/${event.target.id}`)
    }

    const handleLogout = () => {
        history.push('/home')
        dispatch(logout())
        localStorage.clear()
    }

    return(
            <Menu>

            { !user ? 
            null
            // <>
            //     <Menu.Item name='login' onClick={handleClick}  active={page === '/login'} id='login' />
            //     <Menu.Item name='signup' onClick={handleClick}  active={page === '/signup'} id='signup' />
            // </>
            //  does it make sense to have login
            :
                <NavBarLoggedIn 
                handleClick={handleClick}
                handleLogout={handleLogout}
                page={page}
                />
            }
            </Menu>
    )}

export default withRouter(NavBar)