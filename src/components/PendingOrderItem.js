import React from 'react'
import { Segment, Grid, Checkbox, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { itemsToAccept, itemsToDeny, acceptOrder } from '../actions/pendingOrder'
import { updateIngredient, removeLowIngredient } from '../actions/ingredients'

class PendingOrderItem extends React.Component {

    
    state = {
        ingredient: this.props.ingredient.ingredient,
        quantity: null,
    }

    componentDidMount(){
        this.setState({
            ingredient: this.props.ingredient.ingredient,
            quantity: this.props.ingredient.ingredient.quantity
        })
    }

    handleChange = event => {
        let value = parseInt(event.target.value)
        this.setState({
            quantity: value
        })
    }

    handleAccept = event => {
        if(event.target.checked){
        this.props.itemsToAccept(this.state)
        this.handleUpdateIngredient(this.state)
        this.props.removeLowIngredient(this.state.ingredient)

        } 
        // else {
        // this.props.itemsToDeny(this.state.ingredient)
        // }
    }

    handleUpdateIngredient = ingredient => {
        const { id, quantity } = ingredient.ingredient
        const updatedQuantity = (ingredient.quantity + quantity)
        const updatedIngredient = {
            quantity: updatedQuantity
        }
        
        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedIngredient)
        }

        fetch(`http://localhost:3000/ingredients/${id}`, reqObj)
        .then(resp => resp.json())
        .then(ingredient => {
            
            this.props.updateIngredient(ingredient)
            this.props.acceptOrder(ingredient)  
        })

    }

    render(){
        const { id, name, quantity_unit } = this.props.ingredient.ingredient
        const { quantity } = this.state

        return(
            <Segment>
            <Grid columns={3}>
           <Grid.Column width='8'>
               <Checkbox key={id} id={id} label={name} onChange={this.handleAccept}  />
           </Grid.Column>
           <Grid.Column align='right' width={2} inline>      
                <Form.Field>
                    <input width={2} placeholder={quantity} type='number' onChange={this.handleChange} value={quantity} step={1} />
                    <label>{quantity_unit}</label>
                </Form.Field>         
           </Grid.Column>
           <Grid.Column width='8'>
               
           </Grid.Column>
           </Grid>
       </Segment>
        )
    }
}

const mapDispatchToProps = {
    itemsToAccept,
    itemsToDeny,
    updateIngredient,
    acceptOrder,
    removeLowIngredient
}

export default connect(null, mapDispatchToProps)(PendingOrderItem)