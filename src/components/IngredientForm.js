import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { updateIngredient, lowIngredient, changeIngredientQuantity } from '../actions/ingredients'

class IngredientForm extends React.Component {
 
    state = {
        id: this.props.ingredient.id,
        quantity: null,
        updated: []
    }

    handleChange = event => {
        
        this.setState({
            quantity: event.target.value
        })
    }

    handleBlur = event => {

        const id = parseInt(event.target.id)

        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({quantity: this.state.quantity})
        }
        fetch(`http://localhost:3000/ingredients/${id}`, reqObj)
        .then(resp => resp.json())
        .then(ingredient => {
            this.props.updateIngredient(ingredient)
            if(ingredient.quantity < ingredient.par){
                this.props.lowIngredient(ingredient)
            }
        })
        
    }
 
    render(){
    const { name, id, quantity, quantity_unit } = this.props.ingredient
    const ingredientName = `${name}: ${quantity}`
    const ingredientQuantity = `${quantity_unit}`
    
    return(
        
        <Form.Group inline>
            <Form.Input 
                label={ingredientName}
                color='red'
                id={id}
                placeholder={ingredientQuantity} 
                value={this.state.value}
                width={16}     
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            />
        </Form.Group>
        
    )}
}

const mapStateToProps = state => {
    return {
        ingredientQuantity: state.ingredientQuantity
    }
}

const mapDispatchToProps = {
    changeIngredientQuantity,
    updateIngredient,
    lowIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientForm)