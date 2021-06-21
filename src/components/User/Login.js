import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { loginSuccess } from '../../actions/user'
// import { lowIngredient, renderIngredients } from '../../actions/ingredients'
// import { renderVendors } from '../../actions/vendors'
// import { renderOrders } from '../../actions/orders'
import { handleReqObj } from '../../helpers/fetch'
import DynamicForm from '../Forms/DynamicForm'

const Login = props => {

    const [state, setState] = useState[{error: ""}] 

    const handleChange = event => {
        setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (state) => {
        const reqObj = handleReqObj('POST', state)
        // loginAuth(reqObj, this.props)
        //need to handle errors
        //consider setting in store?
    }

    const fields = [{label: 'username', name: 'username'}, {label: 'password', name: 'password'}]
    return(
        <DynamicForm fields={fields} submit='Login' handleSubmit={handleSubmit} error={state.error}/>
    )}   
    

// const mapDispatchToProps = {
//     loginSuccess,
//     renderIngredients,
//     lowIngredient,
//     renderVendors,
//     renderOrders
// }

export default Login