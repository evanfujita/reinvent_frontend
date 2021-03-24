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
        const categories = this.props.categories.map(category => <Menu.Item key={category.id} name={category.name} id={category.id} active={activeItem === category.id} onClick={this.handleClick} />)        
        const categorizedIngredients = this.props.lowIngredients.filter(ingredient => activeItem === ingredient.category_id || activeItem === 'all' ? ingredient : null)
        const ingredients = categorizedIngredients.map(ingredient => <List.Item key={ingredient.id}>{ingredient.name}</List.Item>)

        return(
            <Grid>
                <Menu pointing secondary vertical>
                <Menu.Item name='All' id='all' active={activeItem === 'all'} onClick={this.handleClick} />
                    {categories}
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
        categories: state.categories
    }
}

export default connect(mapStateToProps)(OrderList)