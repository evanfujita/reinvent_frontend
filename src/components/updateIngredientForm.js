import React from 'react'
import { updateIngredient } from '../actions/ingredients'
import { Form } from 'semantic-ui-react'

class updateIngredientForm extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            id: props.ingredient.id,
            name: '',
            par: '',
            quantity_unit: ''
        }
        
    }

    render(){

        const { name, quantity_unit, par } = this.props.ingredient
        return(
            <Form>
                <Form.Input
                    placeholder={name}
                >

                </Form.Input>
            </Form>
        )
    }
}

mapDispatchToProps = {
    updateIngredient
}

export default updateIngredientForm
