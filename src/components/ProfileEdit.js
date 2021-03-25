import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateUser } from '../actions/user'
import { logout } from '../actions/user'

class ProfileEdit extends React.Component {
    
    state = {
        first_name: '',
        last_name: '',
        username: '',
        restaurant_name: '',
        confirmDelete: false
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = () => {
        let updatedUser = this.props.user
        const { id } = this.props.user
        for (const property in this.state){
            if(this.state[property] !== ''){
                updatedUser[property] = this.state[property]
            } else {
                updatedUser[property] = updatedUser[property]
            }
        }

        // this.updateFetch(updatedUser, id)

        this.props.updateUser(updatedUser)
        this.setState({
            first_name: '',
            last_name: '',
            username: '',
            restaurant_name: ''
        })
    }

    updateFetch = (updatedUser, id) => {
        
        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        }

        fetch(`http://localhost:3000/users/${id}`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            
        })
    }

    handleDelete = () => {
        this.setState({
            confirmDelete: !this.state.confirmDelete
        })
    }

    confirmDelete = () => {
        const { id } = this.props.user
        fetch(`http://localhost:3000/users/${id}`, {method: 'DELETE'})
        this.props.logout()
        this.props.history.push('/login')
    }
    
    render(){
        const { first_name, last_name, username, restaurant_name } = this.props.user
        const confirmDelete = this.state.confirmDelete 
            ? 
            <>
            <Button color='red' onClick={this.confirmDelete}>Really Delete</Button><br/><br/>
            <Button onClick={this.handleDelete}>Cancel</Button>
            </>
            : 
            <>
            <Button type='submit' onClick={this.handleSubmit}>Update Information</Button><br/><br/>
            <Button color='red' onClick={this.handleDelete}>Delete</Button>
            </>

        return(
            <div>
                <header>
                    UPDATE USER INFORMATION
                </header>
                <Form>
                
                    <Form.Field>
                        First Name
                        <input id='first_name' onChange={this.handleChange} placeholder={first_name} value={this.state.first_name}/>
                    </Form.Field>
                    <Form.Field>
                        Last Name
                        <input id='last_name' onChange={this.handleChange} placeholder={last_name} value={this.state.last_name}/>
                    </Form.Field>
                    <Form.Field>
                        Username
                        <input id='username' onChange={this.handleChange} placeholder={username} value={this.state.username}/>
                    </Form.Field>
                    <Form.Field>
                        Restaurant Name
                        <input id='restaurant_name' onChange={this.handleChange} placeholder={restaurant_name} value={this.state.restaurant_name}/>
                    </Form.Field>
                    
                    {confirmDelete}
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)