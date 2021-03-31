import React from 'react'
import { connect } from 'react-redux'
import { selectIngredient } from '../actions/selections'

class Ingredient extends React.Component {

    state = {
        ingredientInfo: null,
        displayIngredientInfo: false
    }

    handleIngredientClick = event => {
        const id = parseInt(event.target.id)
        const ingredient = this.props.ingredients.find(ingredient => ingredient.id === id)
        // this.props.selectIngredient(ingredient)
        
        this.setState({
            ingredientInfo: ingredient,
            displayIngredientInfo: true
        })
    }
    render(){
        const { id, name, quantity, quantity_unit } = this.props.ingredientInfo
        return(
            <label
                key={id}
                onClick={this.handleIngredientClick}
                id={id}    
            >
                {name} - {quantity} {quantity_unit}
            </label>
     
        )
    }
}

const mapDispatchToProps = {
    selectIngredient   
}

export default connect(null, mapDispatchToProps)(Ingredient)