import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Icon, Form } from 'semantic-ui-react'
import { updateIngredient, updateIngredientQuantity } from '../../actions/ingredients'
import { selectIngredient } from '../../actions/selections'
import { updatedInventory, undoUpdatedInventory } from '../../actions/updatedInventory'

const IngredientForm = props => {
    
    const { id, quantity, name, quantity_unit } = props.ingredient
    
    //local state
    const [state, setState] = useState({id: id, quantity: quantity, active: false})

    //redux
    const selectedIngredient = useSelector(state => state.selections.ingredient)
    const ingredients = useSelector(state => state.ingredients)
    const dispatch = useDispatch()

    //functions
    const handleBlur = event => {
        const updatedIngredient = {id: selectedIngredient.id, quantity: parseInt(event.target.value)}
        if(event.target.value !== ''){
            dispatch(updatedInventory(updatedIngredient))
            setState({...state, active: true})
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
        dispatch(undoUpdatedInventory(id))
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