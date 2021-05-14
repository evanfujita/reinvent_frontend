import React from 'react'
import { useDispatch } from 'react-redux'
import { selectIngredient } from '../../actions/selections'

const Ingredient = props => {
    
    const { ingredientInfo } = props
    const { id, name, quantity, quantity_unit } = ingredientInfo
    const dispatch = useDispatch()
    const handleIngredientClick = () => {
        dispatch(selectIngredient(ingredientInfo))
    }

    return(
        <label
            key={id}
            onClick={handleIngredientClick}
            id={id}    
        >
            {name} - {quantity} {quantity_unit}
        </label>   
    )
    
}

export default Ingredient