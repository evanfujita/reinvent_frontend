import React from 'react'
import { connect } from 'react-redux'
import { loginSuccess } from '../../actions/user'
import { Form } from 'semantic-ui-react'
import { lowIngredient, renderIngredients } from '../../actions/ingredients'
import { renderVendors } from '../../actions/vendors'
import { renderOrders } from '../../actions/orders'
import { abundantIngredient } from '../../actions/ingredients' 
import { fetchVendors, fetchIngredients, handleReqObj } from '../../helpers/fetch'


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

        const reqObj = handleReqObj('POST', value)

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
                this.props.history.push('/ingredients')
                fetchIngredients(this.props.renderIngredients, this.props.lowIngredient)
                fetchVendors(this.props.renderVendors)
            }
        })
    }

    render(){
        return(

            <Form align='middle' onSubmit={this.handleSubmit} >
            { this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null }
                    <Form.Input
                        fluid
                        onChange={this.handleChange}
                        type='text' name='username'
                        value={this.state.username}
                        placeholder='username'/>
                    <Form.Input className='field' onChange={this.handleChange} type='password' name='password' value={this.state.password} placeholder='password'/>
                    <input className='ui submit button' type='submit' name='username' value='Login'/>
            </Form>

        )}   
    }


const mapDispatchToProps = {
    loginSuccess,
    renderIngredients,
    lowIngredient,
    renderVendors,
    renderOrders,
    abundantIngredient
}

export default connect(null, mapDispatchToProps)(Login)