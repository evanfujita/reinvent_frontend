import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Icon, Form } from 'semantic-ui-react'
import { updateIngredient, updateIngredientQuantity } from '../../actions/ingredients'
import { selectIngredient } from '../../actions/selections'
import { updatedInventory, undoUpdatedInventory } from '../../actions/updatedInventory'

const IngredientForm = props => {
    const selectedIngredient = useSelector(state => state.selections.ingredient)
    const ingredients = useSelector(state => state.ingredients)
    const { id, quantity, name, quantity_unit } = props.ingredient
    const [state, setState] = useState({id: id, quantity: quantity, active: false})
    const dispatch = useDispatch()

    const resetForm = event => {
        event.target.value = ''
    }

    const handleBlur = event => {
        const updatedIngredient = {id: selectedIngredient.id, quantity: parseInt(event.target.value)}
        if(event.target.value !== ''){
            dispatch(updatedInventory(updatedIngredient))
            setState({...state, active: !active})
        }
        event.target.value = ''
    }

    const handleFocus = event => {
        const id = parseInt(event.target.id)
        const selectedIngredient = ingredients.find(ingredient => ingredient.id === id)
        dispatch(selectIngredient(selectedIngredient))
        setState({...state, id: selectedIngredient.id})
    }

    const handleChange = event => {
        setState({...state, quantity: event.target.value})
    }

    const handleUndo = () => {
        setState({
            ...state,
            active: false,
            quantity: quantity
        })
        dispatch(undoUpdatedInventory())
    }    
        
    const active = state.active ? <Icon onClick={handleUndo} id='undo-icon' name='undo' color='yellow' /> : null
    
    return(         
        <>
            <Form.Field align='left'>
            <label>{name} ({quantity_unit}) {active}</label>
            <input 
                width={4}
                id={id}
                min={0}
                placeholder={state.quantity} 
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type='number' 
            />
        </Form.Field> 
        </>
    )
}

export default IngredientForm
