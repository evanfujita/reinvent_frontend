import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Grid, Segment } from 'semantic-ui-react'
import IngredientForm from './IngredientForm'
import AddIngredient from './AddIngredient'
import Ingredient from './Ingredient'
import IngredientInfo from './IngredientInfo'
import CategoryMenuBar from '../Categories/CategoryMenuBar'
import { handleReqObj, updateInventoryFetch } from '../../helpers/fetch'

const IngredientsContainer = props => {
    //state
    const [active, setActive] = useState(false)
    const [viewAddIngredient, setViewAddIngredient] = useState(false)

    //store
    const ingredients = useSelector(state => state.ingredients)
    const category = useSelector(state => state.selections.category)
    const selectedIngredient = useSelector (state => state.selections.ingredient)
    const updatedInventory = useSelector(state => state.updatedInventory)

    const dispatch = useDispatch()

    const handleToggle = () => {
        setActive(!active)
    }

    const handleAddIngredient = () => {
        setViewAddIngredient(!viewAddIngredient)
    }

    const handleSubmit = () => {
        const reqObj = handleReqObj('PATCH', {ingredients: props.updatedInventory})
        dispatch(updateInventoryFetch(reqObj))
    }

    const ingredientsSelector = category !== 0 ? ingredients.filter(ingredient => parseInt(ingredient.category_id) === category) : ingredients
    const ingredientList = ingredientsSelector.map(ingredient => <Segment><Ingredient key={ingredient.id} ingredientInfo={ingredient} /></Segment>)
    const form = ingredientsSelector.map(ingredient => <IngredientForm key={ingredient.id} ingredient={ingredient} />)

    //togglers
    const toggleForm = active ? <Form onSubmit={handleSubmit}>{form}</Form> : <Form><Form.Field>{ingredientList}</Form.Field></Form>
    const toggleViewAddIngredient = viewAddIngredient ? <AddIngredient /> : null
    const toggleIngredientInformation = selectedIngredient ? <Segment><IngredientInfo key={selectedIngredient.id} ingredient={selectedIngredient} /></Segment> : null

    return(
            
        <Grid columns={3} >
            <Grid.Column width={4} align='left'>
                <CategoryMenuBar />
                <Button toggle active={active} onClick={handleToggle}>Edit Inventory</Button><br/>
                <Button onClick={handleAddIngredient}>Add Ingredient</Button><br/><br/>
                {updatedInventory.length > 0 ? <Button onClick={handleSubmit}>Update Inventory</Button> : null}
            </Grid.Column>
            <Grid.Column width={6} align='left' className='scrollable'>
                { toggleForm }
            </Grid.Column>
            <Grid.Column align='middle' width={6}> 
                { toggleIngredientInformation }<br/>
                { toggleViewAddIngredient }
            </Grid.Column>
        </Grid>
        )
    }

export default IngredientsContainer