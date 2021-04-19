import React from 'react'
import { connect } from 'react-redux'
import { loginSuccess } from '../../actions/user'
import { lowIngredient, renderIngredients } from '../../actions/ingredients'
import { renderVendors } from '../../actions/vendors'
import { renderOrders } from '../../actions/orders'
import { loginAuth, handleReqObj } from '../../helpers/fetch'
import FormTemplate from '../Forms/FormTemplate'

class Login extends React.Component{

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (state) => {
        const reqObj = handleReqObj('POST', state)
        loginAuth(reqObj, this.props)
    }

    render(){
        const fields = ['username', 'password']
        return(
            <FormTemplate fields={fields} handleSubmit={this.handleSubmit} />
        )}   
    }


const mapDispatchToProps = {
    loginSuccess,
    renderIngredients,
    lowIngredient,
    renderVendors,
    renderOrders
}

export default connect(null, mapDispatchToProps)(Login)