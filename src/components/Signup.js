import React from 'react'
import { connect } from 'react-redux'

class Signup extends React.Component{

    constructor(){
        super()
        this.state = {
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
            console.log(user)
        })
    }

render(){
    return(
        <form class='ui form' onSubmit={this.handleSubmit} >
            <div class='fields'>
            <div class='field'>
                <input onChange={this.handleChange} type='text' name='username' value={this.state.username} placeholder='username'/>
            </div>
            <div class='field'>
                <input onChange={this.handleChange} type='text' name='password' value={this.state.password} placeholder='password'/>
            </div>
            <div class='field'>
                <input onChange={this.handleChange} type='text' name='password_confirmation' value={this.state.password_confirmation} placeholder='confirm password'/>
            </div>
            <div class='field'>
            <input class='ui submit button' type='submit' name='submit' value='Register'/>
            </div>
            </div>
        </form>
     )
    }   
}


export default Signup 