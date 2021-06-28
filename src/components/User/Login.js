import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAuth } from '../../actions/user'
import { handleReqObj } from '../../helpers/fetch'
import DynamicForm from '../Forms/DynamicForm'

const Login = props => {

    const dispatch = useDispatch()
    const [state] = useState({error: ""})

    //need to do something with error handling here - maybe send it to action

    const handleSubmit = (state) => {
        const reqObj = handleReqObj('POST', state)
        loginAuth(dispatch, reqObj)
    }

    const fields = [{label: 'username', name: 'username'}, {label: 'password', name: 'password'}]
    return(
        <DynamicForm fields={fields} submit='Login' handleSubmit={handleSubmit} error={state.error}/>
    )}   


export default Login