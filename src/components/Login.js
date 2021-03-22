import React from 'react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/login'
import { Form } from 'semantic-ui-react'
import { renderDishes } from '../actions/dishes'
import { renderIngredients } from '../actions/ingredients'



class Login extends React.Component{
    state = {
        username: '',
        password: '',
        error: ''
    }

    fetchDishes = () => {
        fetch('http://localhost:3000/dishes')
        .then(resp => resp.json())
        .then(dishes => {
            this.props.renderDishes(dishes)
        })
    }

    fetchIngredients = () => {
        fetch('http://localhost:3000/ingredients')
        .then(resp => resp.json())
        .then(ingredients => {
            this.props.renderIngredients(ingredients)
        })
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
                this.fetchDishes()
                this.fetchIngredients()
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
    loginSuccess: loginSuccess,
    renderDishes: renderDishes,
    renderIngredients: renderIngredients
}

export default connect(null, mapDispatchToProps)(Login)