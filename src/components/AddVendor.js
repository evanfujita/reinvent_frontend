import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'

class AddVendor extends React.Component {

    state ={
        name: ''
    }

    render(){
        return(
            <Form>
                <Form.Input 
                    label='Name'
                    id='name'
                    placeholder='Name'
                    onChange={this.handleChange}
                    value={name}
                />
            </Form>
        )
    }
}

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(AddVendor)