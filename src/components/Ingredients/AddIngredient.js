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
    const ingredients = useSelector(state => state.ingredients)
    const vendors = useSelector(state => state.vendors)
    const dispatch = useDispatch()


    const handleChange = event => {
        setState({
            ...state, 
            [event.target.name]: event.target.value
        })
    }

    const handleCategoryDropdownChange = event => {
        const id = event.target.id
        setState({
            ...state, 
            category_id: id
        })
    }

    const handleVendorDropdownChange = event => {
        const id = event.target.id
        setState({
            ...state,
            vendor_id: id
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
    
    const categoriesOptions = categories.map(category => {
        return{
            key: category.id,
            text: category.name,
            id: category.id,
            value: category.id
        }
    })

    const vendorsOptions = vendors.map(vendor => {
        return{
            key: vendor.id,
            text: vendor.name,
            id: vendor.id,
            value: vendor.id
        }
    })

    return(
        <Segment basic inverse align='left'>
            <label position='right'>Add Ingredient:</label><br/><br/>
            <label>Category</label>
                <Dropdown 
                    placeholder='Select a Category'
                    fluid
                    selection
                    options={categoriesOptions}
                    onChange={handleCategoryDropdownChange}
                /><br/>
                <label>Vendor</label>
                <Dropdown 
                    placeholder='Select a Vendor'
                    fluid
                    selection
                    options={vendorsOptions}
                    onChange={handleVendorDropdownChange}
                />
            <DynamicForm handleSubmit={handleSubmit} fields={attributes} handleChange={handleChange} submit='Create Ingredient' />
            {/* <DynamicDropdown items={vendors} handleChange={this.handleChange} placeholder='vendors' /> */}
        </Segment>
    )
}

export default AddIngredient