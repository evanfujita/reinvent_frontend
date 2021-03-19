import React from 'react'
import { connect } from 'react-redux'
import { addIngredient } from '../actions/index'
import { selectCategory } from '../actions/index'
import { Menu, Dropdown, Divider, Grid} from 'semantic-ui-react'



class Ingredients extends React.Component{
    constructor(){
        super()
        this.state = {
            categoryId: 0,
            categories: '',
            ingredients: ''
        }
    }

    componentDidMount(){
        
        
        fetch('http://localhost:3000/ingredients')
        .then(resp => resp.json())
        .then(ingredients => {
            this.props.addIngredient(ingredients)
        })
    }

    handleChange = (event) => {
        // debugger
        const id = parseInt(event.target.id)
        this.setState({
            categoryId: event.target.id,
            categories: event.target.innerText
        })
        const category = this.props.categories.find(category => category.id === id)
        this.props.selectCategory(category)

    }

    handleIngredientsChange = event => {
        this.setState({
            ingredients: event.target.innerText
        })
    }

    render(){
        
        const ingredientsSelector = (
            this.state.categoryId !== 0
            ? 
            this.props.ingredients.filter(ingredient => (ingredient.category_id === this.state.categoryId))
            :
            this.props.ingredients
        )

       const categoryOptions = this.props.categories.map(category => {
            return {key: category.id, id: category.id, text: category.name, value: category.id}
        })

        const ingredientOptions = ingredientsSelector.map(ingredient => { 
            return {key: ingredient.id, id: ingredient.id, text: ingredient.name, value: ingredient.id}
        })

        const displayIngredients = ingredientsSelector.map(ingredient => {return <p>{ingredient.name}: {ingredient.quantity} {ingredient.quantity_unit}</p>})

        return(
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Dropdown 
                            placeholder='categories'
                            
                            search
                            selection
                            options={categoryOptions}  
                            onChange={this.handleChange}
                            text={this.state.categories}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown 
                            size='tiny'
                            placeholder='ingredients'
                            search
                            selection
                            options={ingredientOptions}  
                            onChange={this.handleIngredientsChange}
                            text={this.state.ingredients}
                        />
                        </Grid.Column>
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
        categories: state.categories
    }
}

const mapDispatchToProps = {
    addIngredient,
    selectCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(Ingredients)

