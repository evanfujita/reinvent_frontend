import React from 'react'
import { connect } from 'react-redux'

class OrderList extends React.Component {
    
    
    render(){
        const lowIngredients = this.props.ingredients.filter(ingredient => ingredient.quantity < ingredient.par)
        const ingredients = lowIngredients.map(ingredient => <li>{ingredient.name}</li>)

        return(
            <div>
                These Items Need To Be Ordered:
                {ingredients}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(OrderList)