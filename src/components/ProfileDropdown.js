import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class Profile extends React.Component {

    handleClick = event => {
        this.props.history.push('/updateProfile')
    }


    render(){
        const { first_name, last_name, username, restaurant_name } = this.props.user
        const name = `${first_name} ${last_name}`
        return(
            <Dropdown>
                <Dropdown.Menu text='Profile'>
                    <Dropdown.Item text={name}/>
                    <Dropdown.Item text={username} />
                    <Dropdown.Item text={restaurant_name} />
                    <Dropdown.Item onClick={this.handleClick} text='Edit User' />
                </Dropdown.Menu>
            </Dropdown>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps)(Profile))