import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const AddVendor = props => {

    const [name, setName] = useState('')

    const handleChange = event => {

    }
    
        return(
            <Form>
                <Form.Input 
                    label='Name'
                    id='name'
                    placeholder='Name'
                    onChange={handleChange}
                    value={name}
                />
            </Form>
        )
    
}

export default AddVendor