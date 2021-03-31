import React from 'react'
import { connect } from 'react-redux'
import { List, Grid, Menu, Form, Button } from 'semantic-ui-react'
import NotesForm from './NotesForm'
import Email from './Email'
import OrderListItem from './OrderListItem'
import { parMeter } from '../actions/index'

class OrderList extends React.Component {
    
    state = {
        vendorId: 'all',
        orderAbovePar: 0,
        notesForm: false,
        notes: ''
    }


    handleClick = event => {
        this.setState({
            vendorId: event.target.id
        })
    }

    handleMeterChange = event => {
        const meter = parseInt(event.target.value)
        this.setState({
            orderAbovePar: meter
        })
        this.props.parMeter(meter)
    }

    handleNote = event => {
        this.setState({
            notesForm: !this.state.notesForm
        })
    }

    handleNoteChange = event => {
        this.setState({
            notes: event.target.value
        })
    }
    
    render(){
        const vendorId = this.state.vendorId
        const categorizedIngredients = this.props.lowIngredients.filter(ingredient => {
            return (
            vendorId === ingredient.vendor_id || vendorId === 'all' ? ingredient : null
            )
        })
        
        const vendors = this.props.vendors.map(vendor => (
            <Menu.Item key={vendor.id} name={vendor.name} id={vendor.id} active={parseInt(vendorId) === parseInt(vendor.id)} onClick={this.handleClick} />) )
            
        const vendorInfo = this.props.vendors.find(vendor => parseInt(vendorId) === vendor.id)

        const vendorIngredients = this.props.itemsToOrder.filter(ingredient => ingredient.ingredient.vendor_id === vendorId)

        const { orderAbovePar } = this.state
        const displayIngredients = categorizedIngredients.map(ingredient => 
            <OrderListItem key={ingredient.id} ingredient={ingredient} addIngredient={this.addIngredient} orderAbovePar={orderAbovePar} />
        )
            
            return(
            <Grid>
                <Grid.Column width='4' align='left'>
                    <Menu inverted align='left' className='text' pointing secondary vertical>
                        By Vendor:
                    <Menu.Item key='All' name='All' id='all' active={vendorId === 'all'} onClick={this.handleClick} />
                            {vendors}
                    </Menu>
                    <Form inverted>
                    <Form.Input
                        width='10'
                        label={`order above par: ${orderAbovePar}%`}
                        min={0}
                        max={300}
                        name='order relative to par'
                        onChange={this.handleMeterChange}
                        step={5}
                        type='range'
                        value={orderAbovePar}
                    />
                    </Form>
                </Grid.Column>
                <Grid.Column width='8' align='left'>
                    <List>
                        {displayIngredients}
                        <Button onClick={this.handleNote}>Add Note</Button>
                        <Email vendor={vendorInfo} ingredients={vendorIngredients} vendorId={this.state.vendorId} notes={this.state.notes} />
                    </List>
                </Grid.Column>
                <Grid.Column>
                    {this.state.notesForm
                     ?
                    <NotesForm handleNoteChange={this.handleNoteChange} />
                    :
                    null}
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        lowIngredients: state.lowIngredients,
        categories: state.categories,
        vendors: state.vendors,
        orders: state.orders,
        itemsToOrder: state.itemsToOrder
    }
}

const mapDispatchToProps = {
    parMeter
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)