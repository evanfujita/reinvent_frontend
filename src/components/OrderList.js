import React from 'react'
import { connect } from 'react-redux'
import { List, Grid, Menu, Checkbox, Segment, Message } from 'semantic-ui-react'
import Email from './Email'


class OrderList extends React.Component {
    
    state = {
        vendorId: 'all'
    }

    handleClick = event => {
        this.setState({
            vendorId: event.target.id
        })
    }

    handleChange = event => {
        console.log(event.target.id)
    }
    
    render(){
        const vendorId = this.state.vendorId
        const categorizedIngredients = this.props.lowIngredients.filter(ingredient => {
            return (
            vendorId === ingredient.vendor_id || vendorId === 'all' ? ingredient : null
            )
           })
        
        const ingredients = categorizedIngredients.map(ingredient => 
            <Segment vertical>
                    <Grid.Column align='left'>
                        <Checkbox key={ingredient.id} id={ingredient.id} label={ingredient.name} onChange={this.handleChange} />
                    </Grid.Column>
            </Segment>
            
            )
        const vendors = this.props.vendors.map(vendor => (
             <Menu.Item key={vendor.id} name={vendor.name} id={vendor.id} active={vendorId == vendor.id} onClick={this.handleClick} />) )
        const vendorEmail = vendorId === 'all' 
            ?
            this.props.vendors.map(vendor => vendor.email)
            :
            this.props.vendors.find(vendor => parseInt(vendorId) === vendor.id).email 


        return(
            <Grid>
                <Menu basic inverted align='left' className='text' pointing secondary vertical>
                By Vendor:
                <Menu.Item name='All' id='all' active={vendorId === 'all'} onClick={this.handleClick} />
                    {vendors}
                </Menu>
                <Grid.Column width='10'>
                    <List>
                        {ingredients}
                        <Email vendorEmail={vendorEmail}/>
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