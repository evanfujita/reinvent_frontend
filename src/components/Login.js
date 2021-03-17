import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
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
            username: '',
            password: ''
        })

        this.handleLogin(value)
    }

    handleLogin = value => {
        const reqObj = {
            method: 'POST',
            headers: {
                // Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(value)
        }

        fetch('http://localhost:3000/', reqObj)
        .then(resp => resp.json())
        .then(user => {

        })
    }

    render(){
        return(
            <form class="ui six wide column form"  >
                <div class='fields'>

                    <div class='field'>
                        <input onChange={this.handleChange} type='text' name='username' value={this.state.username} placeholder='username'/>
                    </div>
                    <div class='field'>
                        <input onChange={this.handleChange} type='password' name='password' value={this.state.password} placeholder='password'/>
                    </div>
                    <input class='ui submit button' type='submit' name='username' value='Login'/>
                </div>
            </form>
        )}   
    }


export default Login