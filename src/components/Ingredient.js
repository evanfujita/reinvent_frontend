import React from 'react'
import { List } from 'semantic-ui-react'

const Ingredient = props => {
    const { id, name, quantity, quantity_unit } = props.ingredientInfo
    return (
        <List.Item
            key={id}
            onClick={props.handleIngredientClick}
            id={id}    
        >
                {name} - {quantity}{quantity_unit}
        </List.Item>
    )
}

export default Ingredient