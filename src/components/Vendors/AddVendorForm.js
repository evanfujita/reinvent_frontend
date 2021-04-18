import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addVendor } from '../../actions/vendors'
import { handleReqObj, addFetch } from '../../helpers/fetch'

class AddVendorForm extends React.Component {
    
    state = {
        name: '',
        representative: '',
        phone_number: '',
        email: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleClick = () => {
        const newVendor = this.state
        const reqObj = handleReqObj('POST', newVendor)
        addFetch('vendors', reqObj, this.props.addVendor)
    }
    
    render(){
        return(
            <Form>
                <Form.Field>
                    <Form.Input 
                        label='Name'
                        id='name'
                        placeholder='Name'
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <Form.Input 
                        label='Representative'
                        id='representative'
                        placeholder='Representative'
                        onChange={this.handleChange}
                        value={this.state.representative}
                    />
                    <Form.Input 
                        label='Phone Number'
                        id='phone'
                        placeholder='Phone Number'
                        onChange={this.handleChange}
                        value={this.state.phone}
                    />
                     <Form.Input 
                        label='Email'
                        id='email'
                        placeholder='Email'
                        onChange={this.handleChange}
                        value={this.state.email}
                    />

                </Form.Field> 
                <Button onClick={this.handleClick}>Create Vendor</Button>
            </Form>
        )
    }
    }

const mapDisPatchToProps = {
    addVendor
}

export default connect(null, mapDisPatchToProps)(AddVendorForm)