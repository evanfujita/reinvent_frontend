import React from 'react'
import { connect } from 'react-redux'
import { addIngredient } from '../actions/ingredients'
import { Button, Form, Input } from 'semantic-ui-react'

class AddIngredient extends React.Component {
    render(){
        return(
            <div>
                ADDING INGREDIENT
                <Form>
                    <Form.Group>
                        <Form.Field 
                            control={Input}
                            label='Ingredient Name'
                            placeholder='Ingredient Name'
                        />
                    </Form.Group>
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

export default connect(mapDispatchToProps)(AddIngredient)