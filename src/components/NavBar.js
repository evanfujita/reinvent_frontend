import React from 'react'
import { logout } from '../actions/index'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

class NavBar extends React.Component {
    
    state = {
        ['/']: false,
        ['/stations']: false,
        ['/login']: false,
        ['/signup']: false,
    }

    handleClick = (event) => {
        this.setState({
            [!event.target.pathname]: false,
            [event.target.pathname]: true,
        })
    }

    handleLogout = () => {
        this.props.history.push('/home')
        this.props.logout()
        localStorage.clear()
    }

    render(){
    
        const activeItem = this.state['/'] ? 'active item' : 'item'


        return(
            <div className="ui inverted menu">
                <Link onClick={this.handleClick} className='item 'to='/'>Home</Link>
                <Link onClick={this.handleClick} className='item' to='/stations'>Stations</Link>
                <Link onClick={this.handleClick} className='item' to='/login'>Login</Link>
                <Link onClick={this.handleClick} className='item' to='/signup'>Signup</Link>
                <Link onClick={this.handleLogout} className='item' to='/home'>Logout</Link>
            </div>
    )}
}

const mapDispatchToProps = {
    logout: logout
}

export default withRouter(connect(null, mapDispatchToProps)(NavBar))