import React from 'react'
import { connect } from 'react-redux'
import { Menu, List, Grid, Message, Transition } from 'semantic-ui-react'
import PendingOrderItem from './PendingOrderItem'
import { acceptOrder } from '../actions/pendingOrder'


class PendingOrderContainer extends React.Component {
    state = {
        vendorId: 'all',
        emailMessage: false,
        acceptVisible: false,
        rejectVisible: false,
        item: ''
    }

    handleClick = event => {
        const id = event.target.id
        this.setState({
            vendorId: id
        })   
    }

    handleAcceptOrder = item => {
        this.setState({ 
            acceptVisible: true,
            item: item
        })
        setTimeout(() => {this.setState({acceptVisible: false})}, 2000) 
    }

    handleRejectOrder = item => {
        this.setState({ 
            rejectVisible: true,
            item: item
        })
        setTimeout(() => {this.setState({rejectVisible: false})}, 2000) 
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
        
        const { acceptVisible, rejectVisible } = this.state
        const vendorId = this.state.vendorId
        const categorizedIngredients = this.props.pendingOrder.filter(ingredient => (vendorId === ingredient.ingredient.vendor_id || vendorId === 'all' ? ingredient : null)        )
        
        const vendorsMenu = this.props.vendors.map(vendor =>
            <Menu.Item key={vendor.id} name={vendor.name} id={vendor.id} active={parseInt(vendorId) === vendor.id} onClick={this.handleClick} />
        )

        const displayIngredients = categorizedIngredients.map(ingredient => 
            <PendingOrderItem 
                key={ingredient.ingredient.id} 
                ingredient={ingredient} 
                handleAcceptOrder={this.handleAcceptOrder} 
                handleRejectOrder={this.handleRejectOrder} 
            /> 
        )
        
        return(
            <Grid>
                <Grid.Column width={4} align='left'>
                    <Menu inverted align='left' className='text' pointing secondary vertical>
                        By Vendor:
                    <Menu.Item key='All' name='All' id='all' active={vendorId === 'all'} onClick={this.handleClick} />
                        {vendorsMenu}
                    </Menu>

                </Grid.Column>
                <Grid.Column width={8} align='left' className='scrollable'>
                    <List>
                        {displayIngredients}
                    </List>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Transition visible={acceptVisible} animation='scale' duration={500}><Message size='mini' color='green'>{this.state.item} Accepted</Message></Transition>  
                    <Transition visible={rejectVisible} animation='scale' duration={500}><Message size='mini' color='red'>{this.state.item} Rejected</Message></Transition>  
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