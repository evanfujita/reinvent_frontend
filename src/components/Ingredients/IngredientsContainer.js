import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Grid, Segment } from 'semantic-ui-react'
import { selectCategory, selectIngredient } from '../../actions/selections'
import IngredientForm from './IngredientForm'
import AddIngredient from './AddIngredient'
import Ingredient from './Ingredient'
import IngredientInfo from './IngredientInfo'
import CategoryMenuBar from '../Categories/CategoryMenuBar'
import { handleReqObj } from '../../helpers/fetch'

class IngredientsContainer extends React.Component{
    state = {
        active: false,
        viewAddIngredient: false,
        displayIngredientInfo: false, 
        ingredientId: null,
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

    handleSubmit = () => {
        console.log(this.props.updatedInventory)
        const reqObj = handleReqObj('PATCH', {ingredients: this.props.updatedInventory})
        fetch('http://localhost:3000/updateInventory', reqObj)
        .then(resp => resp.json())
        .then(data => {
            debugger
        })
    }

    render(){
        const { active, viewAddIngredient } = this.state
        const { selectedIngredient, category, ingredients } = this.props
        const ingredientsSelector = category !== 0 ? ingredients.filter(ingredient => parseInt(ingredient.category_id) === category) : ingredients
        const ingredientList = ingredientsSelector.map(ingredient => <Segment><Ingredient key={ingredient.id} ingredientInfo={ingredient} /></Segment>)
        const form = ingredientsSelector.map(ingredient => <IngredientForm key={ingredient.id} ingredient={ingredient} />)
        
        //togglers
        const toggleForm = active ? <Form onSubmit={this.handleSubmit}>{form}<input type='submit' name='submit'></input></Form> : <Form align='left'><Form.Field>{ingredientList}</Form.Field></Form>
        const toggleViewAddIngredient = viewAddIngredient ? <AddIngredient /> : null
        const toggleIngredientInformation = selectedIngredient ? <Segment><IngredientInfo key={selectedIngredient.id} ingredient={selectedIngredient} /></Segment> : null

    return(
            
        <Grid columns={2} >
            <Grid.Column width={8} align='middle'>
                <CategoryMenuBar />
                <Button toggle active={active} onClick={this.handleToggle}>Edit Inventory</Button>
                <Button onClick={this.handleAddIngredient}>Add Ingredient</Button><br/><br/>
                { toggleIngredientInformation }<br/>
                { toggleViewAddIngredient }
            </Grid.Column>
            <Grid.Column align='middle' className='scrollable'>
                { toggleForm }
            </Grid.Column>
        </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        category: state.selections.category,
        selectedIngredient: state.selections.ingredient,
        updatedInventory: state.updatedInventory
    }
}

const mapDispatchToProps = {
    selectCategory,
    selectIngredient   
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
