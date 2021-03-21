import React from 'react'
import { logout } from '../actions/login'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

class NavBar extends React.Component {

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

        return(
            <div className="ui inverted menu">
                <Link onClick={this.handleClick} className='item 'to='/'>Home</Link>
                
                { !this.props.user ? 
                <>
                    <Link onClick={this.handleClick} className='item' to='/login'>Login</Link>
                    <Link onClick={this.handleClick} className='item' to='/signup'>Signup</Link>
                </>
                :
                <>
                    <Link className='item'>Profile</Link>
                    <Link className='item'>{this.props.user.restaurant}</Link>
                    <Link onClick={this.handleClick} className='item' to='/stations'>Stations</Link>
                    <Link onClick={this.handleClick} className='item' to='/ingredients'>Ingredients</Link>
                    <Link onClick={this.handleClick} className='item' to='/dishes'>Dishes</Link>
                    <Link onClick={this.handleClick} className='item' to='/newDish'>New Dish</Link>
                    <Link onClick={this.handleLogout} className='item' to='/home'>Logout</Link>   
                </>
                }
            </div>
    )}
}

const mapStateToProps = state => {
    return {
        user: state.user,
        navBar: state.navBar
    }
}

const mapDispatchToProps = {
    logout: logout
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))