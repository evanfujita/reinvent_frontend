import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIngredient } from '../../actions/selections'
import { withRouter } from 'react-router-dom'

const IngredientsDropdown = props => {

    const { history } = props
    const ingredients = useSelector(state => state.ingredients)
    const dispatch = useDispatch()

    const handleChange = event => {
        const ingredient = ingredients.find(ingredient => ingredient.id === parseInt(event.target.id))
        dispatch(selectIngredient(ingredient))
        history.push('/ingredients')
    }

    const ingredientsOptions = ingredients.map(ingredient => {
        const { name, quantity, quantity_unit, id} = ingredient
        let text = `${name}: ${quantity} ${quantity_unit}`
        return {
            key: id,
            text: text,
            id: id,
            value: id            
        }
    })

    return(
            <Dropdown 
                fluid 
                selection 
                search  
                id='ingredients' 
                placeholder='ingredients' 
                options={ingredientsOptions} 
                onChange={handleChange} 
            />
    )
}

export default withRouter(IngredientsDropdown)