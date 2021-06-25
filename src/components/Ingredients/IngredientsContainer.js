import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Grid, Segment } from 'semantic-ui-react'
import IngredientForm from './IngredientForm'
import AddIngredient from './AddIngredient'
import Ingredient from './Ingredient'
import DynamicMenu from '../DynamicMenu'
import { handleReqObj } from '../../helpers/fetch'
import { updateIngredientQuantity } from '../../actions/ingredients'
import { selectCategory, selectIngredient } from '../../actions/selections'
import ItemInfo from '../ItemInfo'
// import { updateIngredientQuantity } from '../../actions/ingredients'

const IngredientsContainer = props => {
    //state
    const [active, setActive] = useState(false)
    const [viewAddIngredient, setViewAddIngredient] = useState(false)

    //store
    const ingredients = useSelector(state => state.ingredients)
    const category = useSelector(state => state.selections.category)
    const selectedIngredient = useSelector (state => state.selections.ingredient)
    const updatedInventory = useSelector(state => state.updatedInventory)
    const categories = useSelector(state => state.categories)

    const dispatch = useDispatch()

    const handleToggle = () => {
        setActive(!active)
    }

    const handleAddIngredient = () => {
        setViewAddIngredient(!viewAddIngredient)
    }

    const handleSubmit = () => {
        const reqObj = handleReqObj('PATCH', {ingredients: updatedInventory})
        updateIngredientQuantity(dispatch, reqObj)
        setActive(false)       
    }

    const ingredientsSelector = category === 'all' ? ingredients : ingredients.filter(ingredient => parseInt(ingredient.category_id) == category.id)
    const ingredientList = ingredientsSelector.map(ingredient => <Segment key={ingredient.id} onClick={()=> dispatch(selectIngredient(ingredient))}><Ingredient key={ingredient.id} ingredientInfo={ingredient}/></Segment>)
    const form = ingredientsSelector.map(ingredient => <IngredientForm key={ingredient.id} ingredient={ingredient} />)
    const attributes = {'Quantity': 'quantity', 'Par': 'par', 'Unit of Measurement': 'quantity_unit'}

    //togglers
    const toggleForm = active ? <Form onSubmit={handleSubmit}>{form}</Form> : <Form><Form.Field>{ingredientList}</Form.Field></Form>
    const toggleViewAddIngredient = viewAddIngredient ? <AddIngredient /> : null

    return(
        <Grid columns={3} >
            <Grid.Column width={4} align='left'>
                <DynamicMenu menuItems={categories} actionItem={selectCategory} all={true} />
                <Button toggle active={active} onClick={handleToggle}>Edit Inventory</Button><br/>
                <Button onClick={handleAddIngredient}>Add Ingredient</Button><br/><br/>
                {updatedInventory.length > 0 ? <Button onClick={handleSubmit}>Update Inventory</Button> : null}
            </Grid.Column>
            <Grid.Column width={6} align='left' className='scrollable'>
                { toggleForm }
            </Grid.Column>
            <Grid.Column align='middle' width={6}> 
                { selectedIngredient ? <ItemInfo header={selectedIngredient.name} item={selectedIngredient} attributes={attributes} /> : null}
                { toggleViewAddIngredient }
            </Grid.Column>
        </Grid>
        )
    }

export default IngredientsContainer