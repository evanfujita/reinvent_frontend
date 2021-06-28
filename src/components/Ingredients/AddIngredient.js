import React, { useState } from 'react'
import { useSelector, 
    // useDispatch 
} from 'react-redux'
import { Segment } from 'semantic-ui-react'
import { handleReqObj, addFetch } from '../../helpers/fetch'
import DynamicDropdown from '../DynamicDropdown'
import DynamicForm from '../Forms/DynamicForm'

const AddIngredient = props => {
    const [state, setState] = useState({})
    const categories = useSelector(state => state.categories)
    const vendors = useSelector(state => state.vendors)
    // const dispatch = useDispatch()

    const handleChange = event => {        
        setState({
            ...state, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = () => {
        const reqObj = handleReqObj('POST', state)
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
            <DynamicDropdown items={vendors} handleChange={(event)=> setState({...state, vendor_id: event.target.id})} placeholder='Vendors' /><br/>
            <DynamicDropdown items={categories} handleChange={(event)=> setState({...state, category_id: event.target.id})} placeholder='Categories' />
            <DynamicForm handleSubmit={handleSubmit} fields={attributes} handleChange={handleChange} submit='Create Ingredient' />
        </Segment>
    )
}

export default AddIngredient