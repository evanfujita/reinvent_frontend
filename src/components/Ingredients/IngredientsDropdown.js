import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectIngredient } from '../../actions/selections'
import { withRouter } from 'react-router-dom'

class IngredientsDropdown extends React.Component {

    handleChange = event => {
        const ingredient = this.props.ingredients.find(ingredient => ingredient.id === parseInt(event.target.id))
        this.props.selectIngredient(ingredient)
        this.props.history.push('/ingredients')
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
             <Dropdown id='ingredients' fluid placeholder='ingredients'  selection search options={ingredientsOptions} onChange={this.handleChange} />
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        selectedIngredient: state.selections.ingredient
    }
}

const mapDispatchToProps = {
    selectIngredient
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IngredientsDropdown))