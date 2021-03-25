import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateUser } from '../actions/user'

class ProfileEdit extends React.Component {
    
    state = {
        first_name: '',
        last_name: '',
        username: '',
        restaurant_name: ''
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

        this.updateFetch(updatedUser, id)

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
            debugger
        })
    }
    
    render(){
        const { first_name, last_name, username, restaurant_name } = this.props.user
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
                    <Button type='submit' onClick={this.handleSubmit}>Update Information</Button>
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