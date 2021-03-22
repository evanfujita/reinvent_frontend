import React from 'react'
import { connect } from 'react-redux'
import { renderIngredients } from '../actions/ingredients'
import { Form, Button, Menu } from 'semantic-ui-react'
import { selectCategory } from '../actions/categories'
import category from '../reducers/category'
import IngredientForm from './IngredientForm'

class IngredientsContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            category: 0,
            ingredients: '',
            active: false
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
        console.log(this.props.ingredientQuantity)
        this.updateFetch()
    }

    updateFetch = () => {
        let reqObj
        
        this.props.ingredientQuantity.forEach(ingredient => {
            // debugger
            reqObj = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({quantity: ingredient.quantity})
            }
            fetch(`http://localhost:3000/ingredients/${ingredient.ingredient}`, reqObj)
            .then(resp => resp.json())
            .then(data => {
                debugger
            })
        })
        
    }

    handleToggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render(){
        const activeItem = this.state.category
        const active = this.state.active

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
        
        const toggleForm = (
            this.state.active
            ?
            <Form>
            {form}
            <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
            </Form>
            :
            ingredientList
        )

    return(
            
        <div>
            <div>
                <Menu tabular>
                    <Menu.Item name={'All'} id={0} active={activeItem === 0} onClick={this.handleClick} />
                    {displayCategories}
                </Menu>
            </div>
            <div>
                <br/>
                <Button toggle active={active} onClick={this.handleToggle}>Edit</Button>
                { toggleForm }
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        category: state.category,
        categories: state.categories,
        ingredientQuantity: state.ingredientQuantity
    }
}

const mapDispatchToProps = {
    renderIngredients,
    selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
