import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginVendors } from '../../actions/vendors'
import { loginAuth } from '../../actions/user'
import { handleReqObj } from '../../helpers/fetch'
import DynamicForm from '../Forms/DynamicForm'

const Login = props => {

    const dispatch = useDispatch()
    const [state, setState] = useState({error: ""})

    const handleChange = event => {
        setState({
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (state) => {
        const reqObj = handleReqObj('POST', state)
        loginAuth(dispatch, reqObj)
        loginVendors(dispatch)
        //need to handle errors
        //consider setting in store?
    }

    const fields = [{label: 'username', name: 'username'}, {label: 'password', name: 'password'}]
    return(
        <DynamicForm fields={fields} submit='Login' handleSubmit={handleSubmit} error={state.error}/>
    )}   


export default Login