import React from 'react'
import { Form, Button } from 'semantic-ui-react'


class NotesForm extends React.Component {

    render(){
        return( 
            <Form>
                <Form.TextArea
                    onChange={this.props.handleNoteChange}
                    placeholder='note to vendor'
                />
            </Form>
        )
    }
}

export default NotesForm