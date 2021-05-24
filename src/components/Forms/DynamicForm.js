import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const DynamicForm = props => {
    const [state, setState] = useState({})
    const handleChange = event => {
        setState({...state, [event.target.name]: event.target.value})
    }
    const { handleSubmit, submit } = props
    
    const formFields = props.fields ? props.fields.map(field => {
        const { label, name } = field
        const placeholder = props.placeholder || label
        return (<Form.Input key={name} label={label} name={name} placeholder={placeholder} onChange={props.handleChange || handleChange} value={state.id} />)})
        : null
    
    return(
        <Form>
            {formFields}
            <Button onClick={()=>handleSubmit(state)}>{submit}</Button>
        </Form>
    )
}

export default DynamicForm