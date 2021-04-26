import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Segment } from 'semantic-ui-react'
import { updateIngredient, updateIngredientQuantity } from '../../actions/ingredients'
import { selectIngredient } from '../../actions/selections'
import { handleReqObj, patchFetch } from '../../helpers/fetch'
import { updatedInventory } from '../../actions/updatedInventory'

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
        const updatedIngredient = {[this.props.selectedIngredient.id]: event.target.value}
        if(event.target.value !== ''){
            this.props.updatedInventory(updatedIngredient)
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
        ingredients: state.ingredients,
        selectedIngredient: state.selections.ingredient,
        category: state.selections.ingredient,
        updatedInventory: state.updatedInventory
    }
}

const mapDispatchToProps = {
    updateIngredientQuantity,
    updateIngredient,
    selectIngredient,
    updatedInventory
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientForm)
