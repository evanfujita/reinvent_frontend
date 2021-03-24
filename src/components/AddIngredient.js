import React from 'react'
import { connect } from 'react-redux'
import { addIngredient } from '../actions/ingredients'
import { Dropdown, Form, Button } from 'semantic-ui-react'

class AddIngredient extends React.Component {
    
    state = {
        name: '',
        quantity: '',
        quantity_unit: '',
        par: '',
        category_id: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleDropdownChange = event => {
        const id = event.target.id
        this.setState({
            category_id: id
        })
    }

    handleSubmit = () => {
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        this.setState({
            name: '',
            quantity: '',
            quantity_unit: '',
            par: '',
            category_id: ''
        })

        fetch('http://localhost:3000/ingredients', reqObj)
        .then(resp => resp.json())
        .then(ingredient => {
            this.props.addIngredient(ingredient)
        })
    }
    
    render(){
        const { name, quantity, quantity_unit, par } = this.state
        
        const categoriesOptions = this.props.categories.map(category => {
            return(
                {
                    key: category.id,
                    text: category.name,
                    id: category.id,
                    value: category.id
                }
            )
        })

        return(
            <div align='left'>
                <label>add ingredient</label>
                <Form align='left'>
                    <Form.Input 
                        label='Name'
                        id='name'
                        placeholder='Name'
                        onChange={this.handleChange}
                        value={name}
                    />
                    <Form.Input 
                        label='Quantity'
                        id='quantity'
                        placeholder='Quantity'
                        onChange={this.handleChange}
                        value={quantity}
                    />
                    <Form.Input 
                        label='Unit of Measurement'
                        id='quantity_unit'
                        placeholder='Unit of Measurement'
                        onChange={this.handleChange}
                        value={quantity_unit}
                    />
                    <Form.Input 
                        label='Par'
                        id='par'
                        placeholder='Par'
                        onChange={this.handleChange}
                        value={par}
                    />
                    <label>Category</label>
                    <Dropdown 
                        placeholder='Select a Category'
                        fluid
                        selection
                        options={categoriesOptions}
                        onChange={this.handleDropdownChange}
                    />
                    <br/>

                    <Form.Field onClick={this.handleSubmit} control={Button}>Create Ingredient</Form.Field>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        ingredients: state.ingredients
    }
}

const mapDispatchToProps = {
    addIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredient)


