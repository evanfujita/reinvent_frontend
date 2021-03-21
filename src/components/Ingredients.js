import React from 'react'
import { connect } from 'react-redux'
import { renderIngredients } from '../actions/ingredients'
import { Dropdown, Grid} from 'semantic-ui-react'



class Ingredients extends React.Component{
    constructor(){
        super()
        this.state = {
            ingredients: ''
        }
    }

    componentDidMount(){
        
        fetch('http://localhost:3000/ingredients')
        .then(resp => resp.json())
        .then(ingredients => {
            this.props.renderIngredients(ingredients)
        })
    }

   
    handleIngredientsChange = event => {
        this.setState({
            ingredients: event.target.innerText
        })
    }

    render(){
        
        const ingredientsSelector = (
            this.props.category !== 0
            ? 
            this.props.ingredients.filter(ingredient => (ingredient.category_id === this.props.category))
            :
            this.props.ingredients
        )

        const ingredientOptions = ingredientsSelector.map(ingredient => { 
            return {key: ingredient.id, id: ingredient.id, text: ingredient.name, value: ingredient.id}
        })

        const displayIngredients = ingredientsSelector.map(ingredient => {return <p>{ingredient.name}: {ingredient.quantity} {ingredient.quantity_unit}</p>})

        return(
            <Grid columns={1}>
                <Grid.Row>
                        <Dropdown 
                            placeholder='ingredients'
                            search
                            selection
                            options={ingredientOptions}  
                            onChange={this.handleIngredientsChange}
                            text={this.state.ingredients}
                        />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {displayIngredients}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        category: state.category
    }
}

const mapDispatchToProps = {
    renderIngredients
}


export default connect(mapStateToProps, mapDispatchToProps)(Ingredients)

