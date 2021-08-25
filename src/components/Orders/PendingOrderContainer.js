import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, Grid, Message, Transition } from 'semantic-ui-react'
import PendingOrderItem from './PendingOrderItem'
import { acceptOrder } from '../../actions/pendingOrder'
import DynamicMenu from '../DynamicMenu'
import { selectVendor } from '../../actions/selections'

const PendingOrderContainer = props => {
    //store
    const vendor = useSelector(state => state.selections.vendor)
    const pendingOrder = useSelector(state => state.pendingOrder)
    const vendors = useSelector(state => state.vendors)
    const dispatch = useDispatch()
    
    //local state
    const [acceptVisible, setAcceptVisible] = useState(false)
    const [rejectVisible, setRejectVisible] = useState(false)
    const [item, setItem] = useState('')
    
    //methods
    const handleAcceptOrder = ingredient => {
        setAcceptVisible(true)
        setItem(ingredient)
        setTimeout(() => {setAcceptVisible(false)}, 2000) 
        dispatch(acceptOrder(ingredient))
    }

    const handleRejectOrder = ingredient => {
        setRejectVisible(true)
        setItem(ingredient)
        setTimeout(() => {setRejectVisible(false)}, 2000) 
    }
    

    const categorizedIngredients = pendingOrder.filter(ingredient => (vendor.id == ingredient.ingredient.vendor_id || vendor === 'all' && ingredient))
    const displayIngredients = categorizedIngredients.map(ingredient => 
        <PendingOrderItem 
            key={ingredient.ingredient.id} 
            ingredient={ingredient} 
            handleAcceptOrder={handleAcceptOrder} 
            handleRejectOrder={handleRejectOrder} 
        /> 
    )
    
    return(
        <Grid>
            <Grid.Column width={4} align='left'>
                <DynamicMenu menuItems={vendors} actionItem={selectVendor} />
            </Grid.Column>
            <Grid.Column width={8} align='left' className='scrollable'>
                <List>
                    {displayIngredients}
                </List>
            </Grid.Column>
            <Grid.Column width={4}>
                <Transition visible={acceptVisible} animation='scale' duration={500}><Message size='mini' color='green'>{item} Accepted</Message></Transition>  
                <Transition visible={rejectVisible} animation='scale' duration={500}><Message size='mini' color='red'>{item} Rejected</Message></Transition>  
            </Grid.Column>
        </Grid>
    )
}

export default PendingOrderContainer