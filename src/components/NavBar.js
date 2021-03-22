import React from 'react'
import { logout } from '../actions/login'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' 
import { Menu, Icon, Label } from 'semantic-ui-react'

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

        return(
            <div>
                <Menu pointing>
                <Menu.Item name='home' onClick={this.handleClick} active={page === '/home'} id='home' />
                
                { !this.props.user ? 
                <>
                    <Menu.Item name='login' onClick={this.handleClick}  active={page === '/login'} id='login' />
                    <Menu.Item name='signup' onClick={this.handleClick}  active={page === '/signup'} id='signup' />
                </>
                :
                <>
                    <Menu.Item name='profile' onClick={this.handleClick} active={page === '/profile'} id='profile' />
                    <Menu.Item name='orderList' onClick={this.handleClick} active={page === '/orderList'} id='orderList'>
                        OrderList
                        <Label circular color='red' floating ></Label>
                    </Menu.Item>
                    <Menu.Item name='stations' onClick={this.handleClick}  active={page === '/stations'} id='stations' />
                    <Menu.Item name='ingredients' onClick={this.handleClick}  active={page === '/ingredients'} id='ingredients' />
                    <Menu.Item name='dishes' onClick={this.handleClick}  active={page === '/dishes'} id='dishes' />
                    <Menu.Item name='newDish' onClick={this.handleClick}  active={page === '/newDish'} id='newDish' />
                    <Menu.Item name='logout' onClick={this.handleLogout}  active={page === '/logout'} id='logout' />
                </>
                }
                </Menu>
            </div>
    )}
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    logout: logout,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))