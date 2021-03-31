import React from 'react'
import { Form, Button, TextArea } from 'semantic-ui-react'


class NotesForm extends React.Component {

    render(){
        return( 
            <Form.Group>
            <Form.Field>
                <label>Add Note:</label><br/><br/>
                <input type='area' onChange={this.props.handleNoteChange} placeholder='e.g., salmon filleted' />
            </Form.Field><br/>
            <Button>Submit</Button>
            </Form.Group>
        )
    }
}

export default NotesForm