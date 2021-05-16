import React from 'react'

const Ingredient = props => {
    
    const { ingredientInfo } = props
    const { id, name, quantity, quantity_unit } = ingredientInfo

    return(
        <label
            key={id}
            id={id}    
        >
            {name} - {quantity} {quantity_unit}
        </label>   
    )
    
}

export default Ingredient