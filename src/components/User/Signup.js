import React from 'react'
import { connect } from 'react-redux'
import { loginSuccess } from '../../actions/user'
import { Form } from 'semantic-ui-react'

class Signup extends React.Component{

    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name: '',
            restaurant_name: '',
            username: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const value = this.state
        
        this.setState({
            first_name: '',
            last_name: '',
            restaurant_name: '',
            username: '',
            password: '',
            password_confirmation: ''
        })

        this.createUser(value)
    }

    createUser = value => {
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: value})
        }

        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(user => {
            this.props.loginSuccess(user)
            this.props.history.push('/stations')
        })
    }

render(){
    return(
        <Form onSubmit={this.handleSubmit} >    
            <Form.Group widths='equal'>
                <Form.Field onChange={this.handleChange} type='text' name='first_name' value={this.state.first_name} placeholder='first name'/>
                <Form.Input onChange={this.handleChange} type='text' name='last_name' value={this.state.last_name} placeholder='last name'/>
                <Form.Input onChange={this.handleChange} type='text' name='restaurant_name' value={this.state.restaurant_name} placeholder='restaurant name'/>
                <Form.Input onChange={this.handleChange} type='text' name='username' value={this.state.username} placeholder='username'/>
                <Form.Input onChange={this.handleChange} type='password' name='password' value={this.state.password} placeholder='password'/>
                <Form.Input onChange={this.handleChange} type='password' name='password_confirmation' value={this.state.password_confirmation} placeholder='confirm password'/>
                <Form.Input id='form-button-control-public' type='submit' name='submit' value='Register'/>
            </Form.Group>
        </Form>
     )
    }   
}

const mapDispatchToProps = {
    loginSuccess: loginSuccess
}

export default connect(null, mapDispatchToProps)(Signup)