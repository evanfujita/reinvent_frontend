import React from 'react'
import { Dropdown } from 'semantic-ui-react'

class IngredientsDropdown extends React.Component {
    render(){
        const ingredientsOptions = this.props.ingredients.map(ingredient => {
            return {
                key: ingredient.id,
                text: ingredient.name,
                id: ingredient.id,
                value: ingredient.id            
            }
        })
        return(
            <Dropdown placeholder='ingredients' search selection options={ingredientsOptions} onChange={this.props.handleDropdownChange} />
        )
    }
}

export default IngredientsDropdown