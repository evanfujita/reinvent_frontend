import React from 'react'

const Ingredient = props => {
    const { id, name, quantity, quantity_unit } = props.ingredientInfo
    return (
        <label
            key={id}
            onClick={props.handleIngredientClick}
            id={id}    
        >
            {name} - {quantity} {quantity_unit}
        </label>
    )
}

export default Ingredient