import React, { useState } from 'react'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { itemsToAccept, acceptOrder } from '../../actions/pendingOrder'
import { updateIngredient, removeLowIngredient } from '../../actions/ingredients'
import { handleReqObj } from '../../helpers/fetch'

const PendingOrderItem = props => {
    
    const dispatch = useDispatch()

    const { ingredient, quantity } = props.ingredient
    const [addedQuantity, setQuantity] = useState(quantity)
    const { id, name, quantity_unit } = ingredient
    
    const { handleAcceptOrder, handleRejectOrder } = props

    const handleChange = event => {
        let value = parseInt(event.target.value)
        setQuantity(value)
    }

    const handleAccept = () => {
        // debugger
        const item = {ingredient: ingredient, quantity: quantity}
        handleAcceptOrder(ingredient.name)
        handleUpdateIngredient(item)
        dispatch(itemsToAccept(item))
        dispatch(removeLowIngredient(ingredient))
    }

    const handleReject = () => {
        handleRejectOrder(ingredient.name)
        dispatch(acceptOrder(ingredient))
    }

    const handleUpdateIngredient = ingredient => {
        const updatedQuantity = (quantity + addedQuantity)
        const updatedIngredient = {
            quantity: updatedQuantity
        }
        const reqObj = handleReqObj('PATCH', updatedIngredient)

        fetch(`http://localhost:3000/ingredients/${id}`, reqObj)
        .then(resp => resp.json())
        .then(ingredient => {
            dispatch(updateIngredient(ingredient))
            dispatch(acceptOrder(ingredient))
        })
    }

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
                onChange={handleChange}
                placeholder={quantity}
                value={quantity}
                min={0}
                step={1}
            />
        </Grid.Column>
        <Grid.Column align='right'>
            <Button.Group>
            <Button icon='thumbs up outline' color='green' onClick={handleAccept} />
            <Button icon='thumbs down outline' color='red' onClick={handleReject} />
            </Button.Group>
        </Grid.Column>
        </Grid>
    </Segment>
    )
    
}

export default PendingOrderItem