import React from 'react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/login'
import { Form } from 'semantic-ui-react'



class Login extends React.Component{
    state = {
        username: '',
        password: '',
        error: ''
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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        }

        fetch('http://localhost:3000/auth', reqObj)
        .then(resp => resp.json())
        .then(user => {
            console.log (user.user, '---')    // CONSOLE LOG
            if (user.error) {
                this.setState({
                    error: user.error
                })
            } else {
                this.props.loginSuccess(user.user)
                localStorage.setItem('token', user.token)
                
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.history.push('/dashboard') 
                
            }
        })
    }

    render(){
        return(

        <div className='form'>
            <h3>Login</h3>
            { this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null }
            <Form onSubmit={this.handleSubmit} >
                    <Form.Input
                        fluid
                        onChange={this.handleChange}
                        type='text' name='username'
                        value={this.state.username}
                        placeholder='username'/>
                    <Form.Input className='field' onChange={this.handleChange} type='password' name='password' value={this.state.password} placeholder='password'/>
                    <input className='ui submit button' type='submit' name='username' value='Login'/>
                
            </Form>
        </div>
        )}   
    }


const mapDispatchToProps = {
    loginSuccess: loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)