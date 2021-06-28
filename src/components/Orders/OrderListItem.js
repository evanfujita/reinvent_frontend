import React, { useState } from 'react'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { itemsToOrder } from '../../actions/pendingOrder'

const OrderListItem = props => {

    const [ingredient] = useState(props.ingredient)
    const { name, quantity_unit } = ingredient
    const id = parseInt(ingredient.id)
    const [quantity, setQuantity] = useState(Math.ceil(props.ingredient.par - props.ingredient.quantity))
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()
    
    const parMeter = useSelector(state => state.parMeter)

    const handleValueChange = event => {
        const value = parseInt(event.target.value)
        setQuantity(value)
    }

    const handleChange = () => {
        const order = {ingredient: ingredient, quantity: quantity}
        dispatch(itemsToOrder(order))
        setChecked(!checked)
    }

    const value = parMeter ? Math.ceil(quantity + (parMeter * quantity / 100)) : quantity
    const icon = checked ? 'check' : 'plus'
    const color = checked ? 'green' : null

        return(
            <Segment>
            <Grid columns={3}>
           <Grid.Column verticalAlign='middle'>
               <label>{`${name} (${quantity_unit})`}</label>
           </Grid.Column>
           <Grid.Column align='right'>
               <Form.Input 
                    id={id}
                    type='number'
                    onChange={handleValueChange}
                    placeholder={quantity}
                    value={value}
                    min={0}
                    step={1}
               />
           </Grid.Column>
           <Grid.Column align='right'>
            <Button icon={icon} color={color} onClick={handleChange}></Button>
           </Grid.Column>
           </Grid>
        </Segment>
        )
}

export default OrderListItem