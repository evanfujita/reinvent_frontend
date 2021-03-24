import React from 'react'

class LoginForm extends React.Component {

    state = {
        username: 'fdsafda',
        password: ''
    }

    render(){

    const options = [
    { key: 1, text: `${this.state.username}`, value: 1 },
    { key: 2, text: `${this.state.password}`, value: 2 },
    ]

    return(
        <div className='ui floating labled icon dropdown'>
            <span className='text'>Login</span>
            <div className='menu'>
                <div className='header'>
                    Username
                </div>
                <div className='ui left icon input'>
                    <input type='text' name='username' placeholder='username' />
                </div>
            </div>
        </div>
    )
}
}

export default LoginForm
