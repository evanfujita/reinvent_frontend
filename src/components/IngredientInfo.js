import React from 'react'
import { List, Button } from 'semantic-ui-react'
import IngredientUpdateForm from './IngredientUpdateForm'
import { connect } from 'react-redux'
import { deleteIngredient } from '../actions/ingredients'

class IngredientInfo extends React.Component {

    state = {
        edit: false,
        confirmDelete: false
    }
    
    handleEdit = event => {
        this.setState({
            edit: !this.state.edit
        })
    }


    handleDelete = () => {
        this.setState({
            confirmDelete: !this.state.confirmDelete
        })
    }

    handleConfirmDelete = () => {
        const id = this.props.selectedIngredient.id

        fetch(`http://localhost:3000/ingredients/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                this.props.deleteIngredient(id)
            }
        })
    }

    render(){
        const { name, quantity, quantity_unit, par } = this.props.ingredient
        const toggleConfirmDelete = this.state.confirmDelete ? <Button onClick={this.handleConfirmDelete}>Are you Sure?</Button> : null
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
                <Button onClick={this.handleDelete}>Delete</Button>
                {toggleConfirmDelete}
                <br/><br/>
                {toggleEdit}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedIngredient: state.selections.ingredient
    } 
}

const mapDispatchToProps = {
    deleteIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientInfo)