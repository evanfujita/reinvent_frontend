import React from 'react'
import { connect } from 'react-redux'
import { renderIngredients } from '../actions/ingredients'
import { Dropdown, Menu, Grid} from 'semantic-ui-react'

class IngredientsContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            category: null,
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

    handleClick = event => {
        const id = parseInt(event.target.id)
        this.setState({
            category: id
        })
    }

    render(){
        const activeItem = this.state.category

        const displayCategories = this.props.categories.map(category => {
            return(<Menu.Item name={category.name} id={category.id} active={activeItem === category.id} onClick={this.handleClick} />)
        })
        
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
            <Grid>
                <Grid.Row>
                    <Menu pointing secondary>
                        {displayCategories}
                    </Menu>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {/* {displayIngredients} */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        category: state.category,
        categories: state.categories
    }
}

const mapDispatchToProps = {
    renderIngredients
}


export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)


{/* <Dropdown 
placeholder='ingredients'
search
selection
options={ingredientOptions}  
onChange={this.handleIngredientsChange}
text={this.state.ingredients}
/> */}