import React from 'react'
import { useSelector } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const Profile = props => {

    const handleClick = event => {
        props.history.push('/updateProfile')
    }

    const user = useSelector(state => state.user)
    
    const { first_name, last_name, username, restaurant_name } = user
    const name = `${first_name} ${last_name}`
    return(
        <Dropdown icon='user' style={{marginTop: 12, marginLeft: 4}}>
            <Dropdown.Menu>
                <Dropdown.Item text={name}/>
                <Dropdown.Item text={username} />
                <Dropdown.Item text={restaurant_name} />
                <Dropdown.Item onClick={handleClick} text='Edit User' />
            </Dropdown.Menu>
        </Dropdown>   
    )
}

export default withRouter(Profile)