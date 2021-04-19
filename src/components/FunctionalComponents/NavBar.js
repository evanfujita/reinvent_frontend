import React from 'react'
import { logout } from '../../actions/user'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' 
import { Menu, Label } from 'semantic-ui-react'
import ProfileDropdown from '../User/ProfileDropdown'
import IngredientsDropdown from '../Ingredients/IngredientsDropdown'

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
        const { history, lowIngredients, pendingOrder } = this.props
        const page = history.location.pathname
        const label = lowIngredients.length === 0 ? null : <Label floating circular color='red' >{lowIngredients.length}</Label>
        const pendingOrders = pendingOrder
            ? 
            <Menu.Item 
            name='pendingOrder' 
            onClick={this.handleClick} 
            active={page === '/pendingOrder'} 
            id='pendingOrder'>
                Pending Orders
                <Label floating circular color='yellow'>{pendingOrder.length}</Label>
            </Menu.Item>
         : 
         null

        return(
                <Menu>
                { !this.props.user ? 
                <>
                    <Menu.Item name='login' onClick={this.handleClick}  active={page === '/login'} id='login' />
                    <Menu.Item name='signup' onClick={this.handleClick}  active={page === '/signup'} id='signup' />
                </>
                :
                <>
                    <Menu.Item name='ingredients' onClick={this.handleClick}  active={page === '/ingredients'} id='ingredients' />
                    <Menu.Item name='vendors' onClick={this.handleClick}  active={page === '/vendors'} id='vendors' />
                    <Menu.Item name='orderList' onClick={this.handleClick} active={page === '/orderList'} id='orderList'>
                        OrderList 
                        { label }
                        
                    </Menu.Item>
                        {pendingOrders}
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