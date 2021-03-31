import React from 'react'
import { Form, Button } from 'semantic-ui-react'


class NotesForm extends React.Component {

    // state = {
    //     note: ''
    // }

    // handleNoteChange = event => {
    //     this.setState({
    //         note: event.target.value
    //     })
    // }

    render(){
        return( 
            <>
            <Form.Field>
                <label>Add Note</label>
                <input onChange={this.props.handleNoteChange} placeholder='note' />
            </Form.Field>
            <Button>Submit</Button>
            </>
        )
    }
}

export default NotesForm