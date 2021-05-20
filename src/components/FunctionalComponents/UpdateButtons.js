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
            {confirmDelete ? <Button onClick={handleConfirmDelete}>Are you Sure?</Button> : null}
            <br/><br/>
            {edit ? <DynamicForm fields={fields} handleSubmit={handleSubmit} submit='Update Ingredient' /> : null}
        </div>
    )   
}

export default UpdateButtons

        // const id = props.selectedIngredient.id

        // fetch(`http://localhost:3000/ingredients/${id}`, {method: 'DELETE'})
        // .then(resp => resp.json())
        // .then(data => {
        //     // data.message ? props.deleteIngredient(id) : null
        // })