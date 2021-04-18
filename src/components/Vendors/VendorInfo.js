import React from 'react'
import { Segment } from 'semantic-ui-react'

const VendorInfo = props => {
    
    const { name, representative, phone, email } = props.vendor
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

export default VendorInfo