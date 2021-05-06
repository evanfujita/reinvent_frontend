import React from 'react'
import { connect } from 'react-redux'
import { Icon, Button, Form } from 'semantic-ui-react'
import { updateIngredient, updateIngredientQuantity } from '../../actions/ingredients'
import { selectIngredient } from '../../actions/selections'
import { updatedInventory } from '../../actions/updatedInventory'
import IngredientInventoryForm from '../Forms/IngredientInventoryForm'

class IngredientForm extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            id: null,
            quantity: props.ingredient.quantity,
            active: false
        }
    }

    resetForm = event => {
        event.target.value = ''
    }

    handleBlur = event => {
        const updatedIngredient = {id: this.props.selectedIngredient.id, quantity: parseInt(event.target.value)}
        if(event.target.value !== ''){
            this.props.updatedInventory(updatedIngredient)
            this.setState({
                active: true
            })
        }
        event.target.value = ''
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
        
        const active = this.state.active ? <><Icon name='check circle outline' color='green'/><Icon name='undo' color='red' /></> : null
        const { name, id, quantity_unit } = this.props.ingredient
    
    return(         
        <>
            {active}
            {/* <IngredientInventoryForm
                ingredient={this.props.ingredient}
                active={this.state.active}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur} 
            /> */}
                    <Form.Field align='left'>
            <label>{name} ({quantity_unit}) </label>
            <input 
                width={4}
                id={id}
                min={0}
                placeholder={this.state.quantity} 
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                type='number' 
            />
        </Form.Field> 
        </>
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
