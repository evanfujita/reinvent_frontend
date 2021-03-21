import React from 'react'
import { connect } from 'react-redux'
import { renderIngredients } from '../actions/ingredients'
import { Form, Button, Menu, Grid} from 'semantic-ui-react'
import { selectCategory } from '../actions/categories'
import category from '../reducers/category'
import IngredientForm from './IngredientForm'

class IngredientsContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            category: 0,
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

    handleSubmit = () => {
        debugger
    }

    render(){
        const activeItem = this.state.category

        const displayCategories = this.props.categories.map(category => {
            return(<Menu.Item name={category.name} id={category.id} active={activeItem === category.id} onClick={this.handleClick} />)
        })
        
        const ingredientsSelector = (
            this.state.category !== 0
            ? 
            this.props.ingredients.filter(ingredient => ingredient.category_id == this.state.category)
            :
            this.props.ingredients
        )

        const ingredientList = ingredientsSelector.map(ingredient => <p>{ingredient.name} - {ingredient.quantity}{ingredient.quantity_unit} </p> )
        const form = ingredientsSelector.map(ingredient => <IngredientForm ingredient={ingredient} />)

        return(
            
        <div>
            <div>
                <Menu tabular>
                    <Menu.Item name={'All'} id={0} active={activeItem === 0} onClick={this.handleClick} />
                    {displayCategories}
                </Menu>
            </div>
            <div>
                <Form>
                {form}
                <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
           
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
    renderIngredients,
    selectCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
