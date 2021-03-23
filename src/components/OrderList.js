import React from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'

class OrderList extends React.Component {
    
    
    render(){
        const ingredients = this.props.lowIngredients.map(ingredient => <List.Item>{ingredient.name}</List.Item>)

        return(
            <>
            <List>
            <List.Item>
                <List.Content>
                    <List.Header>
                        Items To Order:
                    </List.Header>
                </List.Content>
            </List.Item>
                {ingredients}
            </List>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        lowIngredients: state.lowIngredients
    }
}

export default connect(mapStateToProps)(OrderList)