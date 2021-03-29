import React from 'react'
import { Segment } from 'semantic-ui-react'

class VendorInfo extends React.Component {
    
    handleClick= event => {
        console.log(this.props.vendor)
    }
    
    render(){

        const { name, representative, phone, email } = this.props.vendor
        return(
            <Segment basic inverse>
                
                <Segment inverted color='grey'>
                    {name}
                </Segment>
                
                <Segment.Group inverted>
                    <Segment basic stacked inverse> Representative: {representative}</Segment>
                    <Segment basic stacked inverse>Phone Number: {phone}</Segment>
                    <Segment basic stacked inverse>Email Address: {email}</Segment>
                    <Segment basic stacked onClick={this.handleClick}>Edit</Segment>
                    <Segment basic stacked type='button' onClick={this.handleClick}>Delete</Segment>
                </Segment.Group>
            </Segment>
        )
    }
}

export default VendorInfo