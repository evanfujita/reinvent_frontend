import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import DynamicForm from '../Forms/DynamicForm'

const UpdateButtons = props => {

    const [edit, setEdit] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const { handleSubmit, fields } = props

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete = () => {
        setConfirmDelete(!confirmDelete)
    }

    const handleConfirmDelete = () => {

    }

    return(
        <div>
            <Button onClick={handleEdit}>Edit</Button>
            <Button color='red' onClick={handleDelete}>Delete</Button>
            {confirmDelete && <Button onClick={handleConfirmDelete}>Are you Sure?</Button>}
            <br/><br/>
            {edit && <DynamicForm fields={fields} handleSubmit={handleSubmit} submit='Update Ingredient' />}
        </div>
    )   
}

export default UpdateButtons