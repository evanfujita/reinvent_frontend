import React from 'react'
import { connect } from 'react-redux'
import { List, Grid, Menu, Checkbox, Segment, Form } from 'semantic-ui-react'
import Email from './Email'
import OrderMeter from './OrderMeter'


class OrderList extends React.Component {
    
    state = {
        vendorId: 'all',
        ingredients: [],
        orderAbovePar: 0
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
    }

    handleChange = event => {
        const id = parseInt(event.target.id)

        if(event.target.checked){
            this.setState({
                ingredients: [...this.state.ingredients, id]
            })
        } else {
            let newState = this.state.ingredients.filter(ingredient => ingredient !== id)
            this.setState({
                ingredients: newState
            })
        }
    }
    
    render(){
        const vendorId = this.state.vendorId
        const categorizedIngredients = this.props.lowIngredients.filter(ingredient => {
            return (
            vendorId === ingredient.vendor_id || vendorId === 'all' ? ingredient : null
            )
        })
        
        const ingredients = categorizedIngredients.map(ingredient => {
            let quantity = Math.ceil((ingredient.par - ingredient.quantity) + (ingredient.par * this.state.orderAbovePar / 100))

         return(
            <Segment>
                 <Grid>
                <Grid.Column width='8'>
                    <Checkbox key={ingredient.id} id={ingredient.id} label={`${ingredient.name} - ${quantity} ${ingredient.quantity_unit}`} onChange={this.handleChange} />
                </Grid.Column>
                <Grid.Column align='right' width='6'>
                    form
                </Grid.Column>
                </Grid>
            </Segment>
        )    
        })
        const vendors = this.props.vendors.map(vendor => (
             <Menu.Item key={vendor.id} name={vendor.name} id={vendor.id} active={parseInt(vendorId) === vendor.id} onClick={this.handleClick} />) )
        
        const vendorInfo = this.props.vendors.find(vendor => parseInt(vendorId) === vendor.id)
        const vendorIngredients = this.props.lowIngredients.filter(ingredient => (ingredient.vendor_id === vendorId))
        const { orderAbovePar } = this.state

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
                <Grid.Column width='6' align='left'>
                    <List>
                        {ingredients}
                        <Email vendor={vendorInfo} ingredients={vendorIngredients} />
                    </List>
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
        orders: state.orders
    }
}

export default connect(mapStateToProps)(OrderList)