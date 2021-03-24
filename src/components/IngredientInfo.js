import React from 'react'
import { List, Button } from 'semantic-ui-react'
import IngredientUpdateForm from './IngredientUpdateForm'

class IngredientInfo extends React.Component {

    state = {
        edit: false,
        name: '',
        quantity_unit: '',
        par: ''
    }
    
    handleEdit = event => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleChange = event => {
        debugger
    }

    handleDelete = event => {

    }

    
    
    
    render(){
        const { name, quantity, quantity_unit, par } = this.props.ingredient
        const toggleEdit =    
            this.state.edit
            ?
            <IngredientUpdateForm />
            :
            <List>
                <List.Item>Quantity: {quantity} {quantity_unit}</List.Item>
                <List.Item>Par: {par} {quantity_unit}</List.Item>
            </List>

        return(
            <div>
                {name}<br/><br/>
                <Button onClick={this.handleEdit}>Edit</Button>
                <Button onClick={this.handleDelete}>Delete</Button><br/>
                {toggleEdit}
            </div>
        )
    }
}

export default IngredientInfo