import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, Grid, Menu, Form, Button, Segment } from 'semantic-ui-react'
import NotesForm from '../Forms/NotesForm'
import Email from '../FunctionalComponents/Email'
import OrderListItem from './OrderListItem'
import { parMeter } from '../../actions/index'
import { selectVendor } from '../../actions/selections'
import DynamicMenu from '../DynamicMenu'

const OrderList = props => {
    //local state
    const [vendorId, setVendorId] = useState('all')
    const [orderAbovePar, setOrderAbovePar] = useState(0)
    const [notesForm, setNotesForm] = useState(false)
    const [notes, setNotes] = useState('')

    //redux
    const ingredients = useSelector(state => state.ingredients)
    const lowIngredients = useSelector(state => state.lowIngredients)
    const vendors = useSelector(state => state.vendors)
    const orders = useSelector(state => state.orders)
    const itemsToOrder = useSelector(state => state.itemsToOrder)

    const dispatch = useDispatch()

    // const handleClick = event => {
    //     const changeVendor = vendors.find(vendor => vendor.id === parseInt(event.target.id))
    //     setVendorId(event.target.id)
    //     dispatch(selectVendor(changeVendor))
    // }

    const handleMeterChange = event => {
        const meter = parseInt(event.target.value)
        setOrderAbovePar(meter)
        dispatch(parMeter(meter))
    }

    const handleNote = () => {
        setNotesForm(!notesForm)
    }

    const handleSubmitNote = () => {
        setNotesForm(false)
    }    

    const handleNoteChange = event => {
        setNotes(event.target.value)
    }
    
    const vendorInfo = vendors.find(vendor => parseInt(vendorId) === vendor.id)
    
    const categorizedIngredients = lowIngredients.filter(ingredient => vendorId === ingredient.vendor_id || vendorId === 'all' ? ingredient : null)
    const renderNotesForm = notesForm ? <NotesForm handleNoteChange={handleNoteChange} /> : null
    
    // const vendorsMenu = vendors.map(vendor => (
    //     <Menu.Item key={vendor.id} name={vendor.name} id={vendor.id} active={parseInt(vendorId) === parseInt(vendor.id)} onClick={handleClick} />) )
        
    const vendorIngredients = itemsToOrder.filter(ingredient => ingredient.ingredient.vendor_id === vendorId)
    const displayIngredients = categorizedIngredients.map(ingredient => 
        <OrderListItem key={ingredient.id} ingredient={ingredient}  />//addIngredient={addIngredient} />
    )
    const renderButtons = vendorId !== 'all' ? 
        <>
        <Button onClick={handleNote}>Add Note</Button><br/><br/>
        <Email vendor={vendorInfo} ingredients={vendorIngredients} vendorId={vendorId} notes={notes} handleSubmit={handleSubmitNote} />
        </>
        :
        null
        
    return(
        <Grid>
            <Grid.Column width='4' align='left'>
                {/* <Menu align='left' className='text' pointing secondary vertical>
                    By Vendor:
                <Menu.Item key='All' name='All' id='all' active={vendorId === 'all'} onClick={handleClick} />
                        {vendorsMenu}
                </Menu> */}
                <DynamicMenu menuItems={vendors} actionItem={selectVendor} />
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
                {renderNotesForm}
                </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
    
}

export default OrderList