import React from 'react'
import { Segment } from 'semantic-ui-react'

class VendorInfo extends React.Component {
    

    
    render(){

        const { name, representative, phone, email } = this.props.vendor
        return(
            <Segment>
                
                <Segment basic inverse>
                    {name}
                </Segment>
                
                <Segment.Group inverted>
                    <Segment> Representative: {representative}</Segment>
                    <Segment>Phone Number: {phone}</Segment>
                    <Segment>Email Address: {email}</Segment>
                </Segment.Group>
            </Segment>
        )
    }
}



export default VendorInfo