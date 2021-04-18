import React from 'react'
import { List, Button, Popup } from 'semantic-ui-react'
import IngredientUpdateForm from './IngredientUpdateForm'
import { connect } from 'react-redux'
import { deleteIngredient } from '../../actions/ingredients'
import { deleteSelectedIngredient } from '../../actions/selections'

class IngredientInfo extends React.Component {

    state = {
        edit: false,
        confirmDelete: false
    }
    
    handleEdit = () => {
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
                this.props.deleteSelectedIngredient()
                this.props.deleteIngredient(id)
            }
        })
    }

    render(){
        const { name, quantity, quantity_unit, par } = this.props.selectedIngredient

            const deleteIngredient = () => (
                <>
                <Button onClick={this.handleEdit}>Edit</Button>
                <Popup
                    content={
                        <>
                          <Button color='red' onClick={this.handleConfirmDelete}>Delete {name}?</Button> 
                        </>
                        }
                        on='click'
                        popper={{ id: 'popper-container', style: { zIndex : 2000 } }}
                        trigger={<Button color='red'>Delete</Button>}
                />
                </>
            )

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
                <h2>{name}</h2><br/>
                {deleteIngredient()}
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
    deleteIngredient,
    deleteSelectedIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientInfo)