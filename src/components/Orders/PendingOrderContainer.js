import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Menu, List, Grid, Message, Transition } from 'semantic-ui-react'
import PendingOrderItem from './PendingOrderItem'
import { acceptOrder } from '../../actions/pendingOrder'

const PendingOrderContainer = props => {
    //store
    const pendingOrder = useSelector(state => state.pendingOrder)
    const vendors = useSelector(state => state.vendors)
    const itemsToAccept = useSelector(state => state.itemsToAccept)
    const dispatch = useDispatch()
    //local state
    const [vendorId, setVendorId] = useState('all')
    const [emailMessage, setEmailMessage] = useState(false)
    const [acceptVisible, setAcceptVisible] = useState(false)
    const [rejectVisible, setRejectVisible] = useState(false)
    const [item, setItem] = useState('')
    const [ingredients, setIngredients] = useState([])
    //methods
    const handleClick = event => {
        const id = event.target.id
        setVendorId(id)
    }

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

    const handleChange = event => {
        const id = parseInt(event.target.id)

        if(event.target.checked){
            setIngredients([...ingredients, id])
            
        } else {
            let newState = ingredients.filter(ingredient => ingredient !== id)
            setIngredients(newState)
        }
    }
    
    const categorizedIngredients = pendingOrder.filter(ingredient => (vendorId === ingredient.ingredient.vendor_id || vendorId === 'all' ? ingredient : null)        )
    
    const vendorsMenu = vendors.map(vendor =>
        <Menu.Item key={vendor.id} name={vendor.name} id={vendor.id} active={parseInt(vendorId) === vendor.id} onClick={handleClick} />
    )

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
                <Menu align='left' className='text' pointing secondary vertical>
                    By Vendor:
                <Menu.Item key='All' name='All' id='all' active={vendorId === 'all'} onClick={handleClick} />
                    {vendorsMenu}
                </Menu>

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