import React from 'react'
import { updateIngredient } from '../actions/ingredients'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'

class UpdateIngredientForm extends React.Component {
    
    state = {
        id: this.props.ingredient.id,
        name: '',
        par: '',
        quantity_unit: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        const id = this.props.ingredient.id
        if(id !== this.state.id){
            this.setState({
                id: id,
                name: '',
                par: '',
                quantity_unit: ''
            })
        } else {
        this.setState({
            [name]: value
        })
    }
    }

    blurValidation = event => {
        const id = this.props.ingredient.id
        if(id !== this.state.id){
            this.setState({
                id: id,
                name: '',
                par: '',
                quantity_unit: ''
            })
        }
    }
        

    render(){
        const { name, quantity_unit, par } = this.props.ingredient
        return(
            <Form>
                <Form.Field>
                    <label verticalAlign='middle'>Name</label>
                    <input name='name' onBlur={this.blurValidation} onChange={this.handleChange} placeholder={name} value={this.state.name} />
                </Form.Field>
                <Form.Field>
                    <label verticalAlign='middle'>Unit of Measurement</label>
                    <input name='quantity_unit' onChange={this.handleChange} placeholder={quantity_unit} value={this.state.quantity_unit} />
                </Form.Field>
                <Form.Field>
                    <label verticalAlign='middle'>Par</label>
                    <input name='par' onChange={this.handleChange} placeholder={par} value={this.state.par} />
                </Form.Field>
                <Button type='submit'>Update Ingredient</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredient: state.selections.ingredient
    }
}

const mapDispatchToProps = {
    updateIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateIngredientForm)
