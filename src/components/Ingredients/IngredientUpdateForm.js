import React from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { updateIngredient } from '../../actions/ingredients'
import { selectIngredient } from '../../actions/selections'
import { handleReqObj, patchFetch } from '../../helpers/fetch'

class IngredientUpdateForm extends React.Component {
    
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

    handleSubmit = () => {
        let ingredient = this.props.ingredient
        for (const property in this.state){
            if(this.state[property] !== ''){
                ingredient[property] = this.state[property]
            }            
        }
        
        const reqObj = handleReqObj('PATCH', ingredient)
        patchFetch('ingredients', ingredient.id, reqObj, this.props.updateIngredient)        
    }
        
    render(){
        const { name, quantity_unit, par } = this.props.ingredient
        return(
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input name='name' onChange={this.handleChange} placeholder={name} value={this.state.name} />
                </Form.Field>
                <Form.Field>
                    <label>Unit of Measurement</label>
                    <input name='quantity_unit' onChange={this.handleChange} placeholder={quantity_unit} value={this.state.quantity_unit} />
                </Form.Field>
                <Form.Field>
                    <label>Par</label>
                    <input name='par' onChange={this.handleChange} placeholder={par} value={this.state.par} />
                </Form.Field>
                <Button type='submit' onClick={this.handleSubmit}>Update Ingredient</Button>
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
    updateIngredient,
    selectIngredient
}


export default connect(mapStateToProps, mapDispatchToProps)(IngredientUpdateForm)
