import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { changeIngredientQuantity } from '../actions/ingredients'

class IngredientForm extends React.Component {
 
    state = {
        id: this.props.ingredient.id,
        quantity: null
    }

    handleChange = event => {
        
        this.setState({
            quantity: event.target.value
        })
    }

    handleBlur = event => {

        const id = parseInt(event.target.id)
        if(event.target.value.length !== 0){
        this.props.changeIngredientQuantity(this.state)
        } 
    }
 
    render(){
    const { name, id, quantity, quantity_unit } = this.props.ingredient
    const ingredientName = `${name}: ${quantity}`
    const ingredientQuantity = `${quantity_unit}`
    
    return(
        
        <Form.Group inline>
            <Form.Input 
                label={ingredientName}
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
    changeIngredientQuantity
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientForm)