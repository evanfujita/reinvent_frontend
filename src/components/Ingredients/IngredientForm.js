import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Segment } from 'semantic-ui-react'
import { updateIngredient, updateIngredientQuantity } from '../../actions/ingredients'
import { selectIngredient } from '../../actions/selections'

class IngredientForm extends React.Component {
   
    state = {
        id: null,
        quantity: null,
        updated: [],
        active: false
    }

    resetForm = event => {
        event.target.value = ''
    }

    handleBlur = event => {
        if(event.target.value !== ''){
            this.handleFetch(event)
        }
    }

    handleFocus = event => {
        const id = parseInt(event.target.id)
        
        const selectedIngredient = this.props.ingredients.find(ingredient => ingredient.id === id)
        this.props.selectIngredient(selectedIngredient)
        this.setState({
            ...this.state,
            id: selectedIngredient.id
        })
    }

    handleChange = event => {
        this.setState({
            quantity: event.target.value
        })
    }

    handleFetch = event => {
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
            this.props.updateIngredientQuantity(ingredient)
            this.props.selectIngredient(ingredient)
            this.setState({
                active: true
            })
            this.resetForm(event)
        })
    }

    render(){
        const { name, id, quantity, quantity_unit } = this.props.ingredient
        const active = this.state.active ? <Icon name='check circle outline' color='green'/> : null
    
    return(         
        <Segment>
        <Form.Field align='left'>
            <label>{active} {name} ({quantity_unit}) </label>
            <input 
                width={4}
                id={id}
                min={0}
                placeholder={quantity} 
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur} 
                type='number' 
            />
        </Form.Field> 
        </Segment>
    )}
}

const mapStateToProps = state => {
    return {
        ingredientQuantity: state.ingredientQuantity,
        ingredients: state.ingredients,
        selectedIngredient: state.selections.ingredient,
        category: state.selections.ingredient
    }
}

const mapDispatchToProps = {
    updateIngredientQuantity,
    updateIngredient,
    selectIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientForm)
