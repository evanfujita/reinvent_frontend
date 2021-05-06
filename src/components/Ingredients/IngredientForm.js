import React from 'react'
import { connect } from 'react-redux'
import { Icon, Form } from 'semantic-ui-react'
import { updateIngredient, updateIngredientQuantity } from '../../actions/ingredients'
import { selectIngredient } from '../../actions/selections'
import { updatedInventory, undoUpdatedInventory } from '../../actions/updatedInventory'

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

    handleUndo = () => {
        this.setState({
            active: false,
            quantity: this.props.ingredient.quantity
        })
        this.props.undoUpdatedInventory()
    }

    render(){
        
        const active = this.state.active ? <Icon onClick={this.handleUndo} id='undo-icon' name='undo' color='yellow' /> : null
        const { name, id, quantity_unit } = this.props.ingredient
    
    return(         
        <>
            <Form.Field align='left'>
            <label>{name} ({quantity_unit}) {active}</label>
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
    updatedInventory,
    undoUpdatedInventory
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientForm)
