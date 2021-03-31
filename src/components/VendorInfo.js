import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

class VendorInfo extends React.Component {
    
    handleClick= event => {
        console.log(this.props.vendor)
    }
    
    render(){

        const { name, representative, phone, email } = this.props.vendor
        return(
            <Segment>
                
                <Segment >
                    {name}
                </Segment>
                
                <Segment.Group inverted>
                    <Segment> Representative: {representative}</Segment>
                    <Segment>Phone Number: {phone}</Segment>
                    <Segment>Email Address: {email}</Segment>
                    <Segment><Button basic color='yellow' fluid onClick={this.handleClick}>Edit</Button></Segment>
                    <Segment><Button fluid basic color='red' onClick={this.handleClick}>Delete</Button></Segment>    
                </Segment.Group>
            </Segment>
        )
    }
}

export default VendorInfo