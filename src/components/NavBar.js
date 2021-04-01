import React from 'react'
import { logout } from '../actions/user'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' 
import { Menu, Label, Dropdown } from 'semantic-ui-react'
import ProfileDropdown from './ProfileDropdown'
import IngredientsDropdown from './IngredientsDropdown'
import LoginForm from './LoginForm'

class NavBar extends React.Component {

    handleClick = (event) => {
        this.props.history.push(`/${event.target.id}`)
    }

    handleLogout = () => {
        this.props.history.push('/home')
        this.props.logout()
        localStorage.clear()
    }

    render(){
        const page = this.props.history.location.pathname
        const label = this.props.lowIngredients.length > 0 ? <Label floating circular color='red' >{this.props.lowIngredients.length}</Label> : null
        const pendingOrder = this.props.pendingOrder
            ? 
            <Menu.Item 
            name='pendingOrder' 
            onClick={this.handleClick} 
            active={page === '/pendingOrder'} 
            id='pendingOrder'>
                Pending Orders
                <Label floating circular color='yellow' >{this.props.pendingOrder.length}</Label>
            </Menu.Item>
         : 
         null

        return(
            // <div>
                <Menu pointing>
                
                { !this.props.user ? 
                <>
                    <Menu.Item name='login' onClick={this.handleClick}  active={page === '/login'} id='login' />
                    <Menu.Item name='signup' onClick={this.handleClick}  active={page === '/signup'} id='signup' />
                </>
                :
                <>
                    {/* <Menu.Item name='dashboard' onClick={this.handleClick} active={page === '/dashboard'} id='dashboard' /> */}
                    <Menu.Item name='ingredients' onClick={this.handleClick}  active={page === '/ingredients'} id='ingredients' />
                    <Menu.Item name='vendors' onClick={this.handleClick}  active={page === '/vendors'} id='vendors' />
                    <Menu.Item name='orderList' onClick={this.handleClick} active={page === '/orderList'} id='orderList'>
                        OrderList 
                        { label }
                        
                    </Menu.Item>
                        {pendingOrder}
                    <Menu.Item name='ingredients' >
                    <IngredientsDropdown handleClick={this.handleClick} />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <ProfileDropdown />
                        </Menu.Item>
                        <Menu.Item name='logout' onClick={this.handleLogout}  active={page === '/logout'} id='logout' />
                    </Menu.Menu>
                </>
                }
                </Menu>
            // </div>
    )}
}

const mapStateToProps = state => {
    return {
        user: state.user,
        ingredients: state.ingredients,
        lowIngredients: state.lowIngredients,
        pendingOrder: state.pendingOrder
    }
}

const mapDispatchToProps = {
    logout: logout,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))