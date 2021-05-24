import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addIngredient } from '../../actions/ingredients'
import { Dropdown, Form, Button, Segment } from 'semantic-ui-react'
import { handleReqObj, addFetch } from '../../helpers/fetch'
import DynamicDropdown from '../DynamicDropdown'
import DynamicForm from '../Forms/DynamicForm'

const AddIngredient = props => {
    const [state, setState] = useState({})
    const categories = useSelector(state => state.categories)
    // const ingredients = useSelector(state => state.ingredients)
    const vendors = useSelector(state => state.vendors)
    const dispatch = useDispatch()

    const handleChange = event => {
        setState({
            ...state, 
            [event.target.name]: event.target.value
        })
    }

    const handleCategoryDropdownChange = event => {
        setState({
            ...state, 
            category_id: event.target.id
        })
    }

    const handleVendorDropdownChange = event => {
        setState({
            ...state,
            vendor_id: event.target.id
        })
    }

    const handleSubmit = () => {
        const reqObj = handleReqObj('POST', state)
        // dispatch(addIngredient)
        addFetch('ingredients', reqObj)
       setState({})
    }

    const attributes = [
        {label: 'Name', name: 'name'}, 
        {label: 'Quantity', name: 'quantity'}, 
        {label: 'Unit of Measurement', name: 'quantity_unit'}, 
        {label: 'Par', name: 'par'}
    ]

    return(
        <Segment basic inverse align='left'>
            <label position='right'>Add Ingredient:</label><br/><br/>
            <DynamicDropdown items={vendors} handleChange={handleVendorDropdownChange} placeholder='vendors' /><br/>
            <DynamicDropdown items={categories} handleChange={handleCategoryDropdownChange} placeholder='categories' />
            <DynamicForm handleSubmit={handleSubmit} fields={attributes} handleChange={handleChange} submit='Create Ingredient' />
        </Segment>
    )
}

export default AddIngredient