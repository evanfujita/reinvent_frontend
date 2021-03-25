import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ProfileEdit extends React.Component {
    
    state = {
        first_name: '',
        last_name: '',
        username: '',
        restaurant_name: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = () => {
        let updatedUser = this.props.user
        for (const property in this.state){
            if(this.state[property] !== ''){
                updatedUser[property] = this.state[property]
            } else {
                updatedUser[property] = updatedUser[property]
            }
        }

        console.log(updatedUser)
    }
    
    render(){
        const { first_name, last_name, username, restaurant_name } = this.props.user
        return(
            <div>
                <header>
                    UPDATE USER INFORMATION
                </header>
                <Form>
                
                    <Form.Field>
                        First Name
                        <input id='first_name' onChange={this.handleChange} placeholder={first_name} />
                    </Form.Field>
                    <Form.Field>
                        Last Name
                        <input id='last_name' onChange={this.handleChange} placeholder={last_name} />
                    </Form.Field>
                    <Form.Field>
                        Username
                        <input id='username' onChange={this.handleChange} placeholder={username} />
                    </Form.Field>
                    <Form.Field>
                        Restaurant Name
                        <input id='restaurant_name' onChange={this.handleChange} placeholder={restaurant_name} />
                    </Form.Field>
                    <Button type='submit' onClick={this.handleSubmit}>Update Information</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)