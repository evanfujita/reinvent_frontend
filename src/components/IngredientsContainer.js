import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Menu, Grid } from 'semantic-ui-react'
import { selectCategory } from '../actions/categories'
import category from '../reducers/category'
import IngredientForm from './IngredientForm'
import AddIngredient from './AddIngredient'

class IngredientsContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            category: 0,
            ingredients: '',
            active: false,
            viewIngredients: false,
            viewAddIngredient: false
        }
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


    handleToggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    handleAddIngredient = () => {
        this.setState({
            viewAddIngredient: !this.state.viewAddIngredient
        })
    }


    handleViewIngredients = () => {
        this.setState({
            view: !this.state.view
        })
    }

    render(){
        const activeItem = this.state.category
        const active = this.state.active
        // const displayIngredients = this.state.view ? this.display : null

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
            </Form>
            :
            ingredientList
        )

        const toggleViewIngredients = (
            this.state.view 
            ?
            toggleForm
            :
            null
        )

        const toggleViewAddIngredient = (
            this.state.viewAddIngredient
            ?
            <AddIngredient />
            :
            null
        )

    return(
            
        <Grid columns={2}>
            <Grid.Column>
                <Menu tabular>
                    <Menu.Item name={'All'} id={0} active={activeItem === 0} onClick={this.handleClick} />
                    {displayCategories}
                </Menu>
                <Button toggle active={active} onClick={this.handleViewIngredients}>{this.state.view ? 'Hide' : 'View'}</Button>
                <Button toggle active={active} onClick={this.handleToggle}>Edit</Button>
                <Button onClick={this.handleAddIngredient}>Add Ingredient</Button>
                { toggleViewIngredients }
            </Grid.Column>
            <Grid.Column>
                { toggleViewAddIngredient }
            </Grid.Column>
        </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        category: state.category,
        categories: state.categories,
        ingredientQuantity: state.ingredientQuantity,
        
    }
}

const mapDispatchToProps = {
    selectCategory,
    
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
