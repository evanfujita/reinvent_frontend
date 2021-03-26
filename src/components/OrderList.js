import React from 'react'
import { connect } from 'react-redux'
import { List, Grid, Menu } from 'semantic-ui-react'

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
        const { activeItem } = this.state
        const categorizedIngredients = this.props.lowIngredients.filter(ingredient => activeItem === ingredient.category_id || activeItem === 'all' ? ingredient : null)
        const ingredients = categorizedIngredients.map(ingredient => <List.Item key={ingredient.id}>{ingredient.name}</List.Item>)
        const vendors = this.props.vendors.map(vendor => <Menu.Item key={vendor.id} name={vendor.name} id={vendor.name} active={activeItem === vendor.name} onClick={this.handleClick} />) 
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