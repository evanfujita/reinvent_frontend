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

        fetch('http://localhost:3000/ingredients', reqObj)
        .then(resp => resp.json())
        .then(ingredient => {
            this.setState({})
            // debugger
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
            <div>
                NEW INGREDIENT
                <Form>
                    <Form.Input 
                        label='Ingredient Name'
                        id='name'
                        placeholder='Ingredient Name'
                        onChange={this.handleChange}
                        value={name}
                    />
                    <Form.Input 
                        label='Ingredient Quantity'
                        id='quantity'
                        placeholder='Ingredient Quantity'
                        onChange={this.handleChange}
                        value={quantity}
                    />
                    <Form.Input 
                        label='Ingredient Unit of Measurement'
                        id='quantity_unit'
                        placeholder='Ingredient Unit of Measurement'
                        onChange={this.handleChange}
                        value={quantity_unit}
                    />
                    <Form.Input 
                        label='Ingredient Par'
                        id='par'
                        placeholder='Ingredient Par'
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

                    <Form.Field onClick={this.handleSubmit} control={Button}>Submit</Form.Field>
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


