import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const AddForm = props => {
    const [state, setState] = useState({})
    const handleChange = event => {
        setState({...state, [event.target.name]: event.target.value})
    }
    const { handleSubmit, submit } = props
    const formFields = props.fields.map(field => {
        const { label, name } = field
        return (<Form.Input label={label} name={name} placeholder={label} onChange={handleChange} value={state.id} />)})
    
    return(
        <Form>
            {formFields}
            <Button onClick={()=>handleSubmit(state)}>{submit}</Button>
        </Form>
    )
}

export default AddForm