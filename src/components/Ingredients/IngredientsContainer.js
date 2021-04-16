import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Grid, Segment } from 'semantic-ui-react'
import { selectCategory, selectIngredient } from '../../actions/selections'
import IngredientForm from './IngredientForm'
import AddIngredient from './AddIngredient'
import Ingredient from './Ingredient'
import IngredientInfo from './IngredientInfo'
import CategoryMenuBar from '../Categories/CategoryMenuBar'

class IngredientsContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            ingredients: '',
            active: false,
            viewIngredients: false,
            viewAddIngredient: false,
            displayIngredientInfo: false, 
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

    handleDropdownChange = event => {
        const id = parseInt(event.target.id)
        
        const ingredient = this.props.ingredients.find(ingredient => {
            return ingredient.id === id
        })
        this.setState({
            displayIngredientInfo: true,
            ingredientInfo: ingredient
        })
        this.props.selectIngredient(ingredient)
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

        const ingredientList = ingredientsSelector.map(ingredient => <Segment><Ingredient key={ingredient.id} ingredientInfo={ingredient} /></Segment>)
        const form = ingredientsSelector.map(ingredient => <IngredientForm key={ingredient.id} ingredient={ingredient} />)
        
        //togglers
        const toggleForm = this.state.active ? <Form>{form}</Form> : <Form align='left'><Form.Field>{ingredientList}</Form.Field></Form>
        const toggleViewIngredients = this.state.view ? toggleForm : null
        const toggleViewAddIngredient = this.state.viewAddIngredient ? <AddIngredient /> : null
        const toggleIngredientInformation = this.props.selectedIngredient ? <Segment><IngredientInfo key={this.props.selectedIngredient.id} ingredient={this.props.selectedIngredient} /></Segment> : null

    return(
            
        <Grid columns={2} >
            <Grid.Row>
                <Grid.Column width={8} align='middle'>
                    <CategoryMenuBar />
                    <Button toggle active={active} onClick={this.handleViewIngredients}>{this.state.view ? 'Hide' : 'Overview'}</Button>
                    <Button toggle active={active} onClick={this.handleToggle}>Edit Inventory</Button>
                    <Button onClick={this.handleAddIngredient}>Add Ingredient</Button><br/><br/>
                    { toggleIngredientInformation }<br/>
                    { toggleViewAddIngredient }
                </Grid.Column>
                <Grid.Column align='middle' className='scrollable'>
                    { toggleViewIngredients }
                </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
                <Grid.Column width={8}>
                    
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
        selectedIngredient: state.selections.ingredient,
        ingredientQuantity: state.ingredientQuantity,
    }
}

const mapDispatchToProps = {
    selectCategory,
    selectIngredient   
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
