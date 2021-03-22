import React from 'react'
import { connect } from 'react-redux'

class OrderList extends React.Component {
    
    
    render(){
        const ingredients = this.props.lowIngredients.map(ingredient => <li>{ingredient.name}</li>)

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
        ingredients: state.ingredients,
        lowIngredients: state.lowIngredients
    }
}

export default connect(mapStateToProps)(OrderList)