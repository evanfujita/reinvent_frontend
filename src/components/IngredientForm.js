import React from 'react'
import { connect } from 'react-redux'
import { Form, Grid } from 'semantic-ui-react'
import { updateIngredient, lowIngredient, changeIngredientQuantity } from '../actions/ingredients'

class IngredientForm extends React.Component {
 
    state = {
        id: this.props.ingredient.id,
        quantity: null,
        updated: [],
        active: false
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
        
        <Form.Group>
            <Grid columns={2}>
                <Grid.Column>
                    {name}
                </Grid.Column>
                <Grid.Column align='right'>
                </Grid.Column>
                <Grid.Column>
                    <Form.Input 
                        width={16}     
                        id={id}
                        placeholder={ingredientQuantity} 
                        value={this.state.value}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>


            
            </Grid>
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