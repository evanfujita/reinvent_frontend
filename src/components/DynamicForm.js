import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const DynamicForm = props => {

    const [state, setState] = useState({})
    const fields = props.items.map(item => <Form.Input label={item.name}/>)
//     <Form.Input 
//     label='Name'
//     id='name'
//     placeholder='Name'
//     onChange={this.handleChange}
//     value={this.state.name}
// />

    return(
        <Form>
            <Form.Field>

            </Form.Field>
        </Form>
    )
}

export default DyanmicForm