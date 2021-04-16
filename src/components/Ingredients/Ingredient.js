import React from 'react'
import { connect } from 'react-redux'
import { selectIngredient } from '../../actions/selections'

class Ingredient extends React.Component {

    handleIngredientClick = () => {
        this.props.selectIngredient(this.props.ingredientInfo)
    }

    render(){
        const { id, name, quantity, quantity_unit } = this.props.ingredientInfo
        return(
            <label
                key={id}
                onClick={this.handleIngredientClick}
                id={id}    
            >
                {name} - {quantity} {quantity_unit}
            </label>   
        )
    }
}

const mapDispatchToProps = {
    selectIngredient   
}

export default connect(null, mapDispatchToProps)(Ingredient)