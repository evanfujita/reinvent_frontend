import React from 'react'
import { connect } from 'react-redux'
import { Menu, List, Grid, Button } from 'semantic-ui-react'
import PendingOrderItem from './PendingOrderItem'
import { acceptOrder } from '../actions/pendingOrder'


class PendingOrderContainer extends React.Component {
    state = {
        vendorId: 'all'
    }

    handleClick = event => {
        const id = event.target.id
        this.setState({
            vendorId: id
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

    // handleAcceptOrder = event => {
    //     const vendorId = this.state.vendorId
    //     const ingredientsToAccept = this.props.itemsToAccept.filter(ingredient => (vendorId === ingredient.ingredient.vendor_id || vendorId === 'all' ? ingredient : null))
    //     ingredientsToAccept.forEach(ingredient=> {
    //         this.handleUpdateIngredient(ingredient)
    //     })
    // }

    
    
    render(){
        const vendorId = this.state.vendorId
        const categorizedIngredients = this.props.pendingOrder.filter(ingredient => (vendorId === ingredient.ingredient.vendor_id || vendorId === 'all' ? ingredient : null)        )
        
        const vendorsMenu = this.props.vendors.map(vendor =>
            <Menu.Item key={vendor.id} name={vendor.name} id={vendor.id} active={parseInt(vendorId) === vendor.id} onClick={this.handleClick} />
        )

        const displayIngredients = categorizedIngredients.map(ingredient => <PendingOrderItem key={ingredient.ingredient.id} ingredient={ingredient} /> )
        
        return(
            <Grid>
                <Grid.Column width={4} align='left'>
                    <Menu inverted align='left' className='text' pointing secondary vertical>
                        By Vendor:
                    <Menu.Item key='All' name='All' id='all' active={vendorId === 'all'} onClick={this.handleClick} />
                        {vendorsMenu}
                    </Menu>

                </Grid.Column>
                <Grid.Column width={6} align='left'>
                    <List>
                        {displayIngredients}
                    </List>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return{
        pendingOrder: state.pendingOrder,
        vendors: state.vendors,
        itemsToAccept: state.itemsToAccept
    }
}

const mapDispatchToProps = {
    acceptOrder,
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingOrderContainer)