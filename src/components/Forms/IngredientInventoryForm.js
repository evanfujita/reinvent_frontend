import React from 'react'
import { Form } from 'semantic-ui-react'



// 
// 
//
//  not using this component
//
//

const IngredientInventoryForm = props => {
    const { name, id, quantity, quantity_unit } = props.ingredient
    const { handleChange, handleFocus, handleBlur } = props

    return(
        <>
        <Form.Field align='left'>
            <label>{name} ({quantity_unit}) </label>
            <input 
                width={4}
                id={id}
                min={0}
                placeholder={quantity} 
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type='number' 
            />
        </Form.Field> 
        </>
    )
}

export default IngredientInventoryForm