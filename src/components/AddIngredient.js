import React from 'react'
import { connect } from 'react-redux'
import { addIngredient } from '../actions/ingredients'
import { Form, Radio, Button } from 'semantic-ui-react'

class AddIngredient extends React.Component {
    
    state = {
        name: '',
        quantity: '',
        quantity_unit: '',
        par: 0,
        category_id: 0
    }
    
    render(){

        const categories = this.props.categories.map(category => {
            return(
                <Form.Field 
                control={Radio}
                label={category.name}
                />
            )
        })

        return(
            <div>
                NEW INGREDIENT
                <Form>
                    <Form.Input 
                        label='Ingredient Name'
                        placeholder='Ingredient Name'
                    />
                    <Form.Input 
                        label='Ingredient Quantity'
                        placeholder='Ingredient Quantity'
                    />
                    <Form.Input 
                        label='Ingredient Unit of Measurement'
                        placeholder='Ingredient Unit of Measurement'
                    />
                    <Form.Input 
                        label='Ingredient Par'
                        placeholder='Ingredient Par'
                    />
                      <Form.Input
                        label='Ingredient Par'
                        placeholder='Ingredient Par'
                    />
                    <Form.Group>
                        Category:
                        {categories}       
                    </Form.Group>
                    <Form.Field control={Button}>Submit</Form.Field>
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