import React from 'react'

class EditDeleteButtons extends React.Component {

    state = {
        edit: false,
        confirmDelete: false
    }

    handleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleDelete = () => {
        this.setState({
            confirmDelete: !this.state.confirmDelete
        })
    }

    handleConfirmDelete = () => {
        const id = this.props.selectedIngredient.id

        fetch(`http://localhost:3000/ingredients/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                this.props.deleteIngredient(id)
            }
        })
    }

    render(){
        const toggleConfirmDelete = this.state.confirmDelete ? <Button onClick={this.handleConfirmDelete}>Are you Sure?</Button> : null
        const toggleEdit = this.state.edit ? <IngredientUpdateForm /> : null

        return(
            <div>
                <Button onClick={this.handleEdit}>Edit</Button>
                <Button onClick={this.handleDelete}>Delete</Button>
                {toggleConfirmDelete}
                <br/><br/>
                {toggleEdit}
            </div>
        )
    }
}

export default EditDeleteButtons