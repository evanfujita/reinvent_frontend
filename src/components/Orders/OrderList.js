import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, Grid, Form, Button, Segment } from 'semantic-ui-react'
import NotesForm from '../Forms/NotesForm'
import Email from '../FunctionalComponents/Email'
import OrderListItem from './OrderListItem'
import { parMeter } from '../../actions/index'
import { selectVendor } from '../../actions/selections'
import DynamicMenu from '../DynamicMenu'

const OrderList = props => {
    //local state
    const [orderAbovePar, setOrderAbovePar] = useState(0)
    const [notesForm, setNotesForm] = useState(false)
    const [notes, setNotes] = useState('')

    //redux
    // const ingredients = useSelector(state => state.ingredients)
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

    const handleNote = () => {
        setNotesForm(!notesForm)
    }

    const handleSubmitNote = () => {
        setNotesForm(false)
    }    

    const handleNoteChange = event => {
        setNotes(event.target.value)
    }
    
    const vendorInfo = vendors.find(vendor => parseInt(vendor) === vendor.id)
    
    const categorizedIngredients = lowIngredients.filter(ingredient => vendor.id == ingredient.vendor_id || vendor === 'all' ? ingredient : null)
    const renderNotesForm = notesForm ? <NotesForm handleNoteChange={handleNoteChange} /> : null
        
    const vendorIngredients = itemsToOrder.filter(ingredient => ingredient.ingredient.vendor_id === vendor)
    const displayIngredients = categorizedIngredients.map(ingredient => 
        <OrderListItem key={ingredient.id} ingredient={ingredient}  />//addIngredient={addIngredient} />
    )
    const renderButtons = vendor !== 'all' ? 
        <>
        <Button onClick={handleNote}>Add Note</Button><br/><br/>
        <Email ingredients={itemsToOrder} notes={notes} handleSubmit={handleSubmitNote} />
        </>
        :
        null
        
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
                {renderNotesForm}
                </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
    
}

export default OrderList