import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Grid } from 'semantic-ui-react'
import { selectCategory, selectIngredient } from '../actions/selections'
import IngredientForm from './IngredientForm'
import AddIngredient from './AddIngredient'
import Ingredient from './Ingredient'
import IngredientInfo from './IngredientInfo'
import CategoryMenuBar from './CategoryMenuBar'
import IngredientsDropdown from './IngredientsDropdown'


class IngredientsContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            ingredients: '',
            active: false,
            viewIngredients: false,
            viewAddIngredient: false,
            displayIngredientInfo: false, 
            ingredientInfo: null,
            ingredientId: null
        }
    }
   
    handleIngredientsChange = event => {
        this.setState({
            ingredients: event.target.innerText
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

    handleIngredientClick = event => {
        const id = parseInt(event.target.id)
        const ingredient = this.props.ingredients.find(ingredient => ingredient.id === id)
        this.props.selectIngredient(ingredient)
        
        this.setState({
            ingredientInfo: ingredient,
            displayIngredientInfo: true
        })
    }

    render(){
        const active = this.state.active
        
        const ingredientsSelector = (
            this.props.category !== 0
            ? 
            this.props.ingredients.filter(ingredient => parseInt(ingredient.category_id) === this.props.category)
            :
            this.props.ingredients
        )

        const ingredientList = ingredientsSelector.map(ingredient => <Ingredient key={ingredient.id} ingredientInfo={ingredient} handleIngredientClick={this.handleIngredientClick}/> )
        const form = ingredientsSelector.map(ingredient => <IngredientForm key={ingredient.id} ingredient={ingredient} />)
        
        //togglers
        const toggleForm = this.state.active ? <Form>{form}</Form> : <Form align='left'><Form.Field>{ingredientList}</Form.Field></Form>
        const toggleViewIngredients = this.state.view ? toggleForm : null
        const toggleViewAddIngredient = this.state.viewAddIngredient ? <AddIngredient /> : null
        const toggleIngredientInformation = this.state.displayIngredientInfo ? <IngredientInfo key={this.state.ingredientInfo.id} ingredient={this.state.ingredientInfo} /> : null

    return(
            
        <Grid columns={2} >
            <Grid.Row>
                <Grid.Column>
                    <CategoryMenuBar />
                    <Button toggle active={active} onClick={this.handleViewIngredients}>{this.state.view ? 'Hide' : 'Overview'}</Button>
                    <Button toggle active={active} onClick={this.handleToggle}>Edit Inventory</Button>
                    <Button onClick={this.handleAddIngredient}>Add Ingredient</Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                <IngredientsDropdown ingredients={ingredientsSelector} />
                    { toggleViewIngredients }
                </Grid.Column>
                <Grid.Column>
                    { toggleIngredientInformation }
                    { toggleViewAddIngredient }
                </Grid.Column>
            </Grid.Row>
        </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        category: state.selections.category,
        categories: state.categories,
        ingredientQuantity: state.ingredientQuantity,
    }
}

const mapDispatchToProps = {
    selectCategory,
    selectIngredient   
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
