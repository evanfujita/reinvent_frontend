import React from 'react'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { itemsToAccept, itemsToDeny, acceptOrder } from '../../actions/pendingOrder'
import { updateIngredient, removeLowIngredient } from '../../actions/ingredients'
import { handleReqObj } from '../../helpers/fetch'

class PendingOrderItem extends React.Component {

    state = {
        ingredient: this.props.ingredient.ingredient,
        quantity: null,
    }

    componentDidMount(){
        const { ingredient, quantity } = this.props.ingredient
        this.setState({
            ingredient: ingredient,
            quantity: quantity
        })
    }

    handleChange = event => {
        let value = parseInt(event.target.value)
        this.setState({
            quantity: value
        })
    }

    handleAccept = () => {
        const { handleAcceptOrder, itemsToAccept, removeLowIngredient } = this.props
        handleAcceptOrder(this.state.ingredient.name)
        itemsToAccept(this.state)
        this.handleUpdateIngredient(this.state)
        removeLowIngredient(this.state.ingredient)
    }

    handleReject = () => {
        const { ingredient } = this.props.ingredient
        const { handleRejectOrder, acceptOrder } = this.props
        handleRejectOrder(ingredient.name)
        acceptOrder(ingredient)
    }

    handleUpdateIngredient = ingredient => {
        const { id, quantity } = ingredient.ingredient
        const updatedQuantity = (ingredient.quantity + quantity)
        const updatedIngredient = {
            quantity: updatedQuantity
        }
        
        const reqObj = handleReqObj('PATCH', updatedIngredient)

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
           <Grid.Column verticalAlign='middle'>
               {name} ({quantity_unit})
           </Grid.Column>
           <Grid.Column align='right'>      
                <Form.Input
                    type='number'
                    id={id}
                    onChange={this.handleChange}
                    placeholder={quantity}
                    value={quantity}
                    min={0}
                    step={1}
                />
           </Grid.Column>
            <Grid.Column align='right'>
                <Button.Group>
                <Button icon='thumbs up outline' color='green' onClick={this.handleAccept} />
                <Button icon='thumbs down outline' color='red' onClick={this.handleReject} />
                </Button.Group>
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