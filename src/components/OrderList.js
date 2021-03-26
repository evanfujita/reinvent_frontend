import React from 'react'
import { connect } from 'react-redux'
import { List, Grid, Menu, Button } from 'semantic-ui-react'
import Email from './Email'
import emailjs from 'emailjs-com'

class OrderList extends React.Component {
    
    state = {
        activeItem: 'all'
    }

    handleClick = event => {
        this.setState({
            activeItem: event.target.id
        })
    }
    
    render(){
        const activeItem = this.state.activeItem
        const categorizedIngredients = this.props.lowIngredients.filter(ingredient => {
            return (
            activeItem === ingredient.vendor_id || activeItem === 'all' ? ingredient : null
            )
           })
        
        const ingredients = categorizedIngredients.map(ingredient => <List.Item key={ingredient.id}>{ingredient.name}</List.Item>)
        const vendors = this.props.vendors.map(vendor => <Menu.Item key={vendor.id} name={vendor.name} id={vendor.id} active={activeItem == vendor.id} onClick={this.handleClick} />) 
        return(
            <Grid>
                <Menu align='left' className='text' pointing secondary vertical>
                By Vendor:
                <Menu.Item name='All' id='all' active={activeItem === 'all'} onClick={this.handleClick} />
                    {vendors}
                </Menu>
                <Grid.Column>
                    <List>
                        {ingredients}
                        <Email />
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
        vendors: state.vendors
    }
}

export default connect(mapStateToProps)(OrderList)