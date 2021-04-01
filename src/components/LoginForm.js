import React from 'react'
import { Dropdown, Form } from 'semantic-ui-react'


class LoginForm extends React.Component {

    state = {
        username: 'fdsafda',
        password: ''
    }

    render(){


    return(
        <Dropdown text='Login' verticalAlign='middle' closeOnBlur>
        <Dropdown.Menu>
            <Form>
                <Dropdown.Item>
                    <Form.Input 
                        fluid
                        onChange={this.handleChange}
                        type='text' 
                        name='username'
                        value='username'
                        placeholder='username'/>
                </Dropdown.Item>

            <Dropdown.Item>
            <Form.Input className='field' onChange={this.handleChange} type='password' name='password' value={this.state.password} placeholder='password'/>
            </Dropdown.Item>
            
            <Dropdown.Item>
            <input className='ui submit button' type='submit' name='username' value='Login'/>
            </Dropdown.Item>
            </Form>
        </Dropdown.Menu>
        </Dropdown>
    )
}
}

export default LoginForm