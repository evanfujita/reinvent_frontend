import React, { useState } from 'react'
import { List, Button, Popup } from 'semantic-ui-react'
import IngredientUpdateForm from './IngredientUpdateForm'
import { useSelector, useDispatch } from 'react-redux'
import { deleteIngredient } from '../../actions/ingredients'
import { deleteSelectedIngredient } from '../../actions/selections'

// 
// 
// 
//  not using 
// 
// 
// 

const IngredientInfo = props => {

    const selectedIngredient = useSelector(state => state.selections.ingredient)
    const { name, quantity, quantity_unit, par } = selectedIngredient
    const [edit, setEdit] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const dispatch = useDispatch()
    
    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleDelete = () => {
        setConfirmDelete(!confirmDelete)
    }

    const handleConfirmDelete = () => {
        const id = props.selectedIngredient.id
        fetch(`http://localhost:3000/ingredients/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                dispatch(deleteSelectedIngredient())
                dispatch(deleteIngredient(id))
            }
        })
    }

        const deleteIngredient = () => (
            <>
            <Button onClick={handleEdit}>Edit</Button>
            <Popup
                content={
                    <>
                        <Button color='red' onClick={handleConfirmDelete}>Delete {name}?</Button> 
                    </>
                    }
                    on='click'
                    popper={{ id: 'popper-container', style: { zIndex : 2000 } }}
                    trigger={<Button color='red'>Delete</Button>}
            />
            </>
        )

        const toggleEdit =  
            edit
            ?
            <IngredientUpdateForm />
            :
            <List>
                <List.Item>Quantity: {quantity} {quantity_unit}</List.Item>
                <List.Item>Par: {par} {quantity_unit}</List.Item>
            </List>
            
        return(
            <div>
                <h2>{name}</h2><br/>
                {deleteIngredient()}
                <br/><br/>
                {toggleEdit}
            </div>
        )
    
}

// export default IngredientInfo