import React, {useState} from 'react'

const EditDeleteButtons = props => {

    const [edit, setEdit] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete = () => {
        setConfirmDelete(!confirmDelete)
    }

    const handleConfirmDelete = () => {
        const id = this.props.selectedIngredient.id

        fetch(`http://localhost:3000/ingredients/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            data.message ? props.deleteIngredient(id) : null
        })
    }

        const toggleConfirmDelete = confirmDelete ? <Button onClick={handleConfirmDelete}>Are you Sure?</Button> : null
        const toggleEdit = edit ? <IngredientUpdateForm /> : null

        return(
            <div>
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={handleDelete}>Delete</Button>
                {toggleConfirmDelete}
                <br/><br/>
                {toggleEdit}
            </div>
        )
    
}

export default EditDeleteButtons