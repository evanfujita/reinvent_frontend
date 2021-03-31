import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectIngredient } from '../actions/selections'

class IngredientsDropdown extends React.Component {

    handleChange = event => {
        const ingredient = this.props.ingredients.find(ingredient => ingredient.id === parseInt(event.target.id))
        this.props.selectIngredient(ingredient)
    }

    render(){
        const ingredientsOptions = this.props.ingredients.map(ingredient => {
            let name = `${ingredient.name}: ${ingredient.quantity} ${ingredient.quantity_unit}`
            return {
                key: ingredient.id,
                text: name,
                id: ingredient.id,
                value: ingredient.id            
            }
        })
        return(
            <Dropdown placeholder='ingredients' search selection options={ingredientsOptions} onChange={this.handleChange} />
        )
    }
}

const mapStateToProps = state => {
    return {ingredients: state.ingredients}
}

const mapDispatchToProps = {
    selectIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsDropdown)