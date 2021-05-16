import React from 'react'
import { Form } from 'semantic-ui-react'

const NotesForm = props => {

    return( 
        <Form>
            <Form.TextArea
                onChange={props.handleNoteChange}
                placeholder='note to vendor'
            />
        </Form>
    )
}

export default NotesForm