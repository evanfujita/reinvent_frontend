import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, Grid, Form, Segment } from 'semantic-ui-react'
import Email from '../FunctionalComponents/Email'
import OrderListItem from './OrderListItem'
import { parMeter } from '../../actions/index'
import { selectVendor } from '../../actions/selections'
import DynamicMenu from '../DynamicMenu'
import { handleReqObj } from '../../helpers/fetch'
import { sendOrder } from '../../actions/orders'

const OrderList = props => {
    //local state
    const [orderAbovePar, setOrderAbovePar] = useState(0)
    

    //redux
    const lowIngredients = useSelector(state => state.lowIngredients)
    const vendors = useSelector(state => state.vendors)
    const orders = useSelector(state => state.orders)
    const itemsToOrder = useSelector(state => state.itemsToOrder)
    const vendor = useSelector(state => state.selections.vendor)

    const dispatch = useDispatch()

    const handleMeterChange = event => {
        const meter = parseInt(event.target.value)
        setOrderAbovePar(meter)
        dispatch(parMeter(meter))
    }
    
    const handleSubmit = event => {
        const reqObj = handleReqObj('POST', {order: itemsToOrder})
        sendOrder(dispatch, reqObj)
    }
    
    const categorizedIngredients = lowIngredients.filter(ingredient => vendor.id == ingredient.vendor_id || vendor === 'all' && ingredient)
        
    const displayIngredients = categorizedIngredients.map(ingredient => 
        <OrderListItem key={ingredient.id} ingredient={ingredient}  />//addIngredient={addIngredient} />
    )
    const renderButtons = vendor !== 'all' ?  <Email handleSubmit={handleSubmit} ingredients={itemsToOrder} /> : null
        
    return(
        <Grid>
            <Grid.Column width='4' align='left'>
                <DynamicMenu menuItems={vendors} actionItem={selectVendor} all={true} />
            </Grid.Column>
            <Grid.Column width={8} align='left' className='scrollable'>
                <List>
                    {displayIngredients}
                </List>
            </Grid.Column>
            <Grid.Column width={4}>
            <Form inverted>
                <Segment>
                <Form.Input
                    label={`order above par: ${orderAbovePar}%`}
                    min={0}
                    max={300}
                    name='order relative to par'
                    onChange={handleMeterChange}
                    step={5}
                    type='range'
                    value={orderAbovePar}
                    />
                
                {renderButtons}
                </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
    
}

export default OrderList